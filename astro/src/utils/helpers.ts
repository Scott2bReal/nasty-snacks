// import dotenv from 'dotenv'
// dotenv.config()

import type { BandMember } from "../types"

export function randomNumber(max: number): number {
  return Math.floor(Math.random() * max)
}

export function generateSanityURL(projectId: string, dataset: string, docType: string) {
  const query = encodeURIComponent(`*[_type == "${docType}"]`)

  return `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`
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
  if (a.name[0] > b.name[0]) {
    return 1
  } else if (a.name[0] < b.name[0]) {
    return -1
  } else {
    return 0
  }
}
