'use client'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  type: 'image' | 'video'
}

export default function MediaPreview({ src, alt, type }: Props) {
  return (
    <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
      {type === 'video' ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top group-hover:scale-105 transition duration-500"
        />
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
    </div>
  )
}
