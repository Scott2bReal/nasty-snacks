import { createSignal } from "solid-js"

/** @todo find a better type to extend */
interface SpotifyButtonProps {
  url: string
  title: string
  /** Classes for the button */
  className?: string
}

const SpotifyButton = ({ url, title }: SpotifyButtonProps) => {
  const [isEmbedVisible, setIsEmbedVisible] = createSignal(false)

  return (
    <>
      <button
        class={`${
          isEmbedVisible() ? "hidden" : "block"
        } mx-auto mb-[70px] mt-4 h-[80px] w-[300px] rounded-xl bg-gradient-to-br from-pink-700 to-purple-700`}
        onClick={() => {
          setIsEmbedVisible(true)
        }}
      >
        Listen
      </button>
      <iframe
        src={url}
        title={`${title} Spotify Preview`}
        allowfullscreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        class={`${isEmbedVisible() ? "block" : "hidden"} mx-auto pt-4`}
      ></iframe>
    </>
  )
}

export default SpotifyButton
