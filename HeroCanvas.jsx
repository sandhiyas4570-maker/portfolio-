import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Generates a scattered "3D plot" point cloud - two interleaved clusters
// (echoing a 2-class scatter plot, a nod to data visualization / ML)
function generatePoints(count, radius) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random())
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
  }
  return positions
}

function ScatterCluster({ count, radius, color, speed, offset }) {
  const ref = useRef()
  const positions = useMemo(() => generatePoints(count, radius), [count, radius])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * speed
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15
  })

  return (
    <group ref={ref} position={offset}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  )
}

function ConnectingLines({ count, radius, color }) {
  // A sparse set of connecting edges to suggest a network / graph structure
  const geometry = useMemo(() => {
    const points = []
    const nodes = []
    for (let i = 0; i < count; i++) {
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      )
    }
    for (let i = 0; i < nodes.length; i++) {
      const next = nodes[(i + 1) % nodes.length]
      points.push(nodes[i], next)
    }
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [count, radius])

  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04
  })

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.18} />
    </lineSegments>
  )
}

function Scene({ pointer }) {
  const group = useRef()

  useFrame(() => {
    if (!group.current) return
    // subtle parallax toward pointer position
    group.current.rotation.y += (pointer.current.x * 0.3 - group.current.rotation.y) * 0.02
    group.current.rotation.x += (pointer.current.y * 0.2 - group.current.rotation.x) * 0.02
  })

  return (
    <group ref={group}>
      <ScatterCluster count={420} radius={2.6} color="#E8A33D" speed={0.05} offset={[0, 0, 0]} />
      <ScatterCluster count={260} radius={1.6} color="#4FB6A8" speed={-0.08} offset={[0.4, 0.2, 0]} />
      <ConnectingLines count={26} radius={2.6} color="#4FB6A8" />
    </group>
  )
}

export default function HeroCanvas() {
  const pointer = useRef({ x: 0, y: 0 })
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  const handlePointerMove = (e) => {
    pointer.current = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    }
  }

  if (reducedMotion) {
    // Static, low-motion fallback for users who prefer reduced motion
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-line bg-panel/40" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className="w-full h-full" onPointerMove={handlePointerMove} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <Scene pointer={pointer} />
      </Canvas>
    </div>
  )
}
