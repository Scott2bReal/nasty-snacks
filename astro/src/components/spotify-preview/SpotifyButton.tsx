/** @todo find a better type to extend */
interface SpotifyButtonProps {
  url: string
  title: string
  /** Classes for the button */
  className?: string
}

const createSpotifyEmbed = (url: string, title: string) => {
  const document = window.document
  const spawningButton = document.getElementById(`spotify-button-${title}`)
  if (!spawningButton) return

  const embed = document.createElement("iframe")

  embed.src = url
  embed.title = `${title} Spotify Preview`
  embed.allowFullscreen = false
  embed.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  embed.classList.add("mx-auto", "pt-4")
  spawningButton.replaceWith(embed)
}

const SpotifyButton = ({ url, title }: SpotifyButtonProps) => {
  return (
    <>
      <button
        id={`spotify-button-${title}`}
        class={`mx-auto mb-[70px] mt-4 h-[80px] w-[300px] rounded-xl bg-gradient-to-br from-pink-700 to-purple-700 text-lg tracking-widest`}
        onClick={() => {
          createSpotifyEmbed(url, title)
        }}
      >
        LISTEN
      </button>
    </>
  )
}

export default SpotifyButton
