export default {
    name: 'press',
    type: 'document',
    title: 'Press',
    fields: [
        {
            title: 'Categories',
            name: 'categories',
            type: 'string',
            options: {
                list: [
                    { title: 'Publications', value: 'publications' },
                    { title: 'Books', value: 'books' }
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
            }
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'brand_name',
            type: 'string',
            title: 'Brand Name'
        }
    ]
}

