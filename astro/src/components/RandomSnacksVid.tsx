import { getYoutubeId, randomNumber } from '../utils/helpers'
import type { SnacksVid } from '../types'
import { createSignal } from 'solid-js'

interface Props {
  snacksVids: SnacksVid[]
}
export function RandomSnacksVid({ snacksVids }: Props) {
  const embedURL = 'https://www.youtube.com/embed/'
  const [isClicked, setIsClicked] = createSignal(false)
  const [isFaded, setIsFaded] = createSignal(false)
  const [vid, setVid] = createSignal(
    snacksVids[randomNumber(snacksVids.length)]
  )
  const [usedVids, setUsedVids] = createSignal<SnacksVid[]>([])

  const findNewVid = (currentVid: SnacksVid) => {
    setUsedVids([...usedVids(), currentVid])
    const unusedVids = snacksVids.filter((vid) => !usedVids().includes(vid))
    console.log(unusedVids.map((vid) => vid.title))
    const newVid = unusedVids[randomNumber(unusedVids.length)]
    if (usedVids().length === snacksVids.length - 1) {
      setUsedVids([currentVid])
    }
    return newVid
  }
  const handleVideoTransition = () => {
    setIsFaded(true)
    setVid(findNewVid(vid()))
    setTimeout(() => {
      setIsFaded(false)
    }, 1000)
  }

  return (
    <div class={`flex flex-col items-center justify-center`}>
      <iframe
        width='560px'
        height='315px'
        class={`mx-auto max-w-full transition-opacity duration-500 ease-in-out`}
        id='iframe'
        src={`${embedURL}${getYoutubeId(vid().url)}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
        classList={{
          'opacity-0': isFaded(),
        }}
      ></iframe>
      <button
        onClick={handleVideoTransition}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        classList={{
          'scale-95': isClicked(),
        }}
        class='mt-4 rounded-lg bg-gradient-to-br from-pink-700 to-purple-700 p-2 tracking-widest'
      >
        Random Video
      </button>
    </div>
  )
}
