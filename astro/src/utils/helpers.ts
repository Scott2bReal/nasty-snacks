import type { BandMember, Show } from "../types"

/**
 * A nice helper to enable tailwind linting
 * @example tw`h-12 w-12 bg-red-500`
 */
export function tw(strings: TemplateStringsArray): string {
  return strings.join('')
}

export function randomNumber(max: number): number {
  return Math.floor(Math.random() * max)
}

export function dateFormatter(dateString: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  return formatter
    .format(new Date(`${dateString}T00:00:00-06:00`))
    .toUpperCase()
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

export function showSortByDate(a: Show, b: Show) {
  // Shows may not have a date. In this case, we want them to appear first in
  // the list. Otherwise, sort from earliest to latest
  if (!a.date) {
    return -1
  }
  if (!b.date) {
    return 1
  }
  return new Date(a.date).getTime() - new Date(b.date).getTime()
}

export function getYoutubeId(url: string) {
  const id = url.split("=")[1]
  return id.length > 0 ? id : ""
}

export function isUpcoming(show: Show) {
  // If show doesn't have a date, is probably recurring residency or something
  // We want to keep those on the site
  if (!show.date) return true
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  // Set the time zone offset for Chicago
  yesterday.setTime(yesterday.getTime() + 3600 * 1000 * -6)
  const showDate = new Date(`${show.date}T00:00:00-06:00`)

  return showDate > yesterday
}

export function generateSpotifyEmbed(spotifyLink: string) {
  const getSpotifyId = (spotifyLink: string) => {
    const regex = new RegExp(/album\/(.*?)\?/)
    const match = spotifyLink.match(regex)
    return match ? match[0].replace("album/", "").replace("?", "") : null
  }
  const id = getSpotifyId(spotifyLink)
  if (!id) return
  return `https://open.spotify.com/embed/album/${id}?utm_source=generator`
}
