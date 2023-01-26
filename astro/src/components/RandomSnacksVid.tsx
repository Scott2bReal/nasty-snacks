import { getYoutubeId, randomNumber } from '../utils/helpers'
import type { SnacksVid } from '../types'
import { createEffect, createSignal } from 'solid-js'

interface Props {
  snacksVids: SnacksVid[]
}
export const RandomSnacksVid = ({ snacksVids }: Props) => {
  const embedURL = 'https://www.youtube.com/embed/'

  const [vid, setVid] = createSignal(
    snacksVids[randomNumber(snacksVids.length)]
  )
  const [isClicked, setIsClicked] = createSignal(false)
  const [headerStyles, setHeaderStyles] = createSignal(
    'pb-2 text-xl opacity-0 transition duration-500 ease-in-out'
  )

  const findNewVid = (currentVid: SnacksVid) => {
    const unusedVids = snacksVids.filter((vid) => vid.url !== currentVid.url)
    return unusedVids[randomNumber(unusedVids.length)]
  }

  createEffect(() => {
    setTimeout(() => {
      setHeaderStyles(
        'pb-2 text-xl opacity-100 transition duration-500 ease-in-out'
      )
    }, 1000)
  })

  return (
    <div class={`flex flex-col items-center justify-center`}>
      <h1 class={headerStyles()}>{vid().title}</h1>
      <iframe
        width='560px'
        height='315px'
        class='mx-auto max-w-full'
        id='iframe'
        src={`${embedURL}${getYoutubeId(vid().url)}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
      <button
        onClick={() => setVid(findNewVid(vid()))}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        class={`${
          isClicked() ? `scale-95` : ``
        } bg-gradient-to-br to-purple-700 from-pink-700 tracking-widest mt-4 p-2 rounded-lg`}
      >
        Random Video
      </button>
    </div>
  )
}
