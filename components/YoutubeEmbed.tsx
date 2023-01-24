type Props = {
	embedId: string
	title: string
}

export const YoutubeEmbed = ({ embedId, title }: Props) => (
	<div className="pb-4">
		<iframe
			className="w-full aspect-video"
			src={`https://www.youtube.com/embed/${embedId}`}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title={title}
		/>
	</div>
);
