type MediaPreviewProps = {
  src: string
  type: 'image' | 'video'
  alt?: string
}

export default function MediaPreview({ src, type, alt }: MediaPreviewProps) {
  if (type === 'video') {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover rounded-lg"
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt || 'Media preview'}
      className="w-full h-auto object-cover rounded-lg"
    />
  )
}
