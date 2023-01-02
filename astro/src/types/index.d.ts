export type Show = {
  venueName: string
  subtitle?: string
  date?: string
  city: string
  state: string
  ticketLink?: string
  description?: string
}

export type BandMember = {
  name: string
  instrument: string
  picture?: SanityImage
}

export type SanityImage =
{
    _type: string
    asset: {
      _ref: string
      _type: string
    };
    crop: {
      _type: string
      bottom: number
      left: number
      right: number
      top: number
    };
    hotspot: {
      _type: string
      height: number
      width: number
      x: number
      y: number
    };
  }

export type SnacksVid = {
  title: string
  url: string
}

export type Album = {
  title: string
  spotifyLink: string
  cover: SanityImage
}
