import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const LoadingScreen = ({ onComplete }) => {
  const wrapRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    // Auto-complete loading after 3 seconds
    const autoCompleteTimer = setTimeout(() => {
      onComplete()
    }, 3000)

    let areawidth = window.innerWidth,
        areaheight = window.innerHeight,
        canvassize = 500,
        length = 30,
        radius = 5.6,
        rotatevalue = 0.035,
        acceleration = 0,
        animatestep = 0,
        toend = false,
        pi2 = Math.PI * 2,
        group = new THREE.Group(),
        mesh, ringcover, ring,
        camera, scene, renderer

    // Setup camera
    camera = new THREE.PerspectiveCamera(65, 1, 1, 10000)
    camera.position.z = 150

    // Setup scene
    scene = new THREE.Scene()
    scene.add(group)

    // Create tube mesh
    const curve = new THREE.Curve()
    curve.getPoint = function(percent) {
      const x = length * Math.sin(pi2 * percent)
      const y = radius * Math.cos(pi2 * 3 * percent)
      let z, t

      t = percent % 0.25 / 0.25
      t = percent % 0.25 - (2 * (1 - t) * t * -0.0185 + t * t * 0.25)
      if (Math.floor(percent / 0.25) === 0 || Math.floor(percent / 0.25) === 2) {
        t *= -1
      }
      z = radius * Math.sin(pi2 * 2 * (percent - t))

      return new THREE.Vector3(x, y, z)
    }

    mesh = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 200, 1.1, 2, true),
      new THREE.MeshBasicMaterial({ color: 0x3b82f6 })
    )
    group.add(mesh)

    // Ring cover
    ringcover = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 15, 1),
      new THREE.MeshBasicMaterial({ color: 0xf5f5f5, opacity: 0, transparent: true })
    )
    ringcover.position.x = length + 1
    ringcover.rotation.y = Math.PI / 2
    group.add(ringcover)

    // Ring
    ring = new THREE.Mesh(
      new THREE.RingGeometry(4.3, 5.55, 32),
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, opacity: 0, transparent: true })
    )
    ring.position.x = length + 1.1
    ring.rotation.y = Math.PI / 2
    group.add(ring)

    // Fake shadow
    for (let i = 0; i < 10; i++) {
      const plain = new THREE.Mesh(
        new THREE.PlaneGeometry(length * 2 + 1, radius * 3, 1),
        new THREE.MeshBasicMaterial({ color: 0xf5f5f5, transparent: true, opacity: 0.13 })
      )
      plain.position.z = -2.5 + i * 0.5
      group.add(plain)
    }

    // Setup renderer
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(canvassize, canvassize)
    renderer.setClearColor('#f5f5f5')

    const canvas = renderer.domElement
    canvas.style.position = 'absolute'
    canvas.style.left = '50%'
    canvas.style.top = '50%'
    canvas.style.transform = 'translate(-50%, -50%)'
    wrapRef.current.appendChild(canvas)

    // Event handlers
    const start = () => { toend = true }
    const back = () => { toend = false }

    document.body.addEventListener('mousedown', start, false)
    document.body.addEventListener('touchstart', start, false)
    document.body.addEventListener('mouseup', back, false)
    document.body.addEventListener('touchend', back, false)

    // Easing function
    const easing = (t, b, c, d) => {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b
      return c / 2 * ((t -= 2) * t * t + 2) + b
    }

    // Render function
    const render = () => {
      animatestep = Math.max(0, Math.min(240, toend ? animatestep + 1 : animatestep - 4))
      acceleration = easing(animatestep, 0, 1, 240)

      if (acceleration > 0.35) {
        const progress = (acceleration - 0.35) / 0.65
        group.rotation.y = -Math.PI / 2 * progress
        group.position.z = 50 * progress
        const fadeProgress = Math.max(0, (acceleration - 0.97) / 0.03)
        mesh.material.opacity = 1 - fadeProgress
        ringcover.material.opacity = ring.material.opacity = fadeProgress
        ring.scale.x = ring.scale.y = 0.9 + 0.1 * fadeProgress

        if (fadeProgress >= 1) {
          setTimeout(() => onComplete(), 500)
        }
      }

      renderer.render(scene, camera)
    }

    // Animation loop
    const animate = () => {
      mesh.rotation.x += rotatevalue + acceleration
      render()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      clearTimeout(autoCompleteTimer)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      document.body.removeEventListener('mousedown', start)
      document.body.removeEventListener('touchstart', start)
      document.body.removeEventListener('mouseup', back)
      document.body.removeEventListener('touchend', back)
      if (wrapRef.current && renderer.domElement) {
        wrapRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#f5f5f5',
      zIndex: 9999,
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      WebkitTouchCallout: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
    }}>
      <div
        ref={wrapRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
      <p style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        fontSize: '12px',
        color: '#666',
        lineHeight: '2em',
        textAlign: 'center',
        margin: 0
      }}>
        Press anywhere to dive into Hemapathi's digital journey since 2025
      </p>
    </div>
  )
}

export default LoadingScreen