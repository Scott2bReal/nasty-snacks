export default {
  name: 'shows',
  type: 'document',
  title: 'Shows',
  fields: [
    {
      name: 'venueName',
      type: 'string',
      title: 'Venue Name',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'ticketLink',
      type: 'string',
      title: 'Ticket Link',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
}
