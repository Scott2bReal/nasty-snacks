export default {
  name: 'albums',
  type: 'document',
  title: 'Albums',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'spotifyLink',
      type: 'string',
      title: 'Spotify Link',
    },
    {
      name: 'cover',
      type: 'image',
      title: 'Album Cover',
    }
  ]
}
