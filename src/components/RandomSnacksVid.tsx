import { randomNumber } from '../utils/helpers'
import { useState } from 'preact/hooks'

export const RandomSnacksVid = () => {
  const snacksVids = [
    'https://www.youtube.com/embed/ThavI6vr6sY',
    'https://www.youtube.com/embed/FNQh0UWbohU',
    'https://www.youtube.com/embed/wwPFkeR5mLQ',
    'https://www.youtube.com/embed/KkDhYj33fPU',
    'https://www.youtube.com/embed/a6wQ8Z8Kxvw',
  ]

  let [url, setUrl] = useState(snacksVids[randomNumber(snacksVids.length)])

  const findNewUrl = (currentUrl: string) => {
    const unusedUrls = snacksVids.filter((url) => url !== currentUrl)
    return unusedUrls[randomNumber(unusedUrls.length)]
  }

  return (
    <div class='flex flex-col items-center justify-center'>
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
        class='tracking-widest mt-4 p-2 rounded-lg hover:bg-pink-700 hover:scale-95 bg-purple-700 text-neutral-900 shadow-black shadow-md transition duration-300 ease-in-out'
      >
        Random Video
      </button>
    </div>
  )
}
