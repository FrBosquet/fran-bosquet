type Props = {
  embedId: string
  title: string
}

export const YoutubeEmbed = ({ embedId, title }: Props) => (
  <div className="pb-4">
    <iframe
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="aspect-video w-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      title={title}
    />
  </div>
)
