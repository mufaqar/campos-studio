export default {
    name: 'team',
    type: 'document',
    title: 'Team',
    fields: [
      {
        name: 'member_name',
        type: 'string',
        title: 'Team Meamber Name'
      },
      {
        title: 'Profile Image',
        name: 'profileimage',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        name: 'about',
        type: 'text',
        title: 'About'
      },
      {
        name: 'designation',
        type: 'text',
        title: 'Designation'
      },
    ]
}