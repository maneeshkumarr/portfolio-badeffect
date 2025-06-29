'use client'
import Particles from "react-tsparticles"
import { loadStarsPreset } from "tsparticles-preset-stars"

export default function StarField() {
  const particlesInit = async (engine: any) => {
    await loadStarsPreset(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: { color: "#0a0101" },
        fullScreen: { enable: true, zIndex: -1 },
      }}
    />
  )
}
