// import dotenv from 'dotenv'
// dotenv.config()

import type { BandMember } from "../types"

export function randomNumber(max: number): number {
  return Math.floor(Math.random() * max)
}

export function dateFormatter(dateString: string) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return formatter.format(new Date(`${dateString}T00:00:00-06:00`)).toUpperCase()
}

export function rosterSort(a: BandMember, b: BandMember) {
  if (a.instrument[0] > b.instrument[0]) {
    return 1
  } else if (a.instrument[0] < b.instrument[0]) {
    return -1
  } else {
    return 0
  }
}

export function getYoutubeId(url: string) {
  const id = url.split('=')[1]
  return id.length > 0 ? id : ''
}
