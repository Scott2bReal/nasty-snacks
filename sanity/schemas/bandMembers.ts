export default {
  name: 'bandMembers',
  type: 'document',
  title: 'Band Members',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'instrument',
      type: 'string',
      title: 'Instrument',
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture',
      options: {
        hotspot: true,
      },
    }
  ],
}
