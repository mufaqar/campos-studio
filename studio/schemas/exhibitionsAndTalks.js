export default {
    name: 'exhibitions_and_talks',
    type: 'document',
    title: 'Exhibitions And Talks',
    fields: [
        {
            name: 'year',
            type: 'number',
            title: 'year'
        },
        {
            name: 'fields_data',
            type: 'array',
            title: 'Fields Data',
            of: [
                {
                  type: "object",
                  fields: [
                    {
                        name: 'title',
                        type: 'string',
                        title: 'Title'
                    },
                    {
                        name: 'place',
                        type: 'array',
                        title: 'Place',
                        of: [{ type: 'string' }]
                    }
                  ]
                }
            ]
        },
        
    ]
}