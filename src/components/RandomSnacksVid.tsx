import { randomNumber } from '../utils/helpers'
import { useState } from 'preact/hooks'

export const RandomSnacksVid = () => {
  const buttonStylesUp = 'bg-gradient-to-br to-purple-700 from-pink-700 tracking-widest mt-4 p-2 rounded-lg shadow-black shadow-md transition duration-150 ease-in-out'
  const buttonStylesDown = buttonStylesUp + ' scale-95'

  const snacksVids = [
    'https://www.youtube.com/embed/ThavI6vr6sY',
    'https://www.youtube.com/embed/FNQh0UWbohU',
    'https://www.youtube.com/embed/wwPFkeR5mLQ',
    'https://www.youtube.com/embed/KkDhYj33fPU',
    'https://www.youtube.com/embed/a6wQ8Z8Kxvw',
  ]

  const [url, setUrl] = useState(snacksVids[randomNumber(snacksVids.length)])
  const [buttonStyles, setButtonStyles] = useState(buttonStylesUp)

  const findNewUrl = (currentUrl: string) => {
    const unusedUrls = snacksVids.filter((url) => url !== currentUrl)
    return unusedUrls[randomNumber(unusedUrls.length)]
  }

  return (
    <div class='flex flex-col items-center justify-center pt-8'>
      <iframe
        width='560'
        height='315'
        class='mx-auto max-w-[100vw]'
        id='iframe'
        src={url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <button
        onClick={() => setUrl(findNewUrl(url))}
        onMouseDown={() => setButtonStyles(buttonStylesDown)}
        onMouseUp={() => setButtonStyles(buttonStylesUp)}
        class={`${buttonStyles}`}
      >
        Random Video
      </button>
    </div>
  )
}
