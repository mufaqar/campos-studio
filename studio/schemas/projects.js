export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },

    {
      title: 'Feature Image',
      name: 'featureimage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ]
    },
    {
      name: "audio",
      title: "Audio File",
      type: "file",
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
    },
    {
      name: "detail",
      type: "text",
      title: "Detail",
    },
    {
      name: "tag_line",
      type: "string",
      title: "Tag Line",
    },

    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'year',
      type: 'number',
      title: 'Year'
    },
    {
      name: 'area',
      type: 'string',
      title: 'Area'
    },
    {
      title: 'Team Members',
      name: 'teammember',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'team' }
          ]
        }
      ]
    },
    {

      title: 'collaborators',
      name: 'Collaborators',
      type: 'array',
      of: [{ type: 'string' }]
    },

    {
      name: 'gallery',
      type: 'object',
      title: 'Gallery',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative2 text',
                },
                {
                  name: "size",
                  title: "Size",
                  description: "Choose a Size",
                  type: "string",
                  options: {
                    layout: "radio",
                    list: [
                      { title: "Full", value: "full" },
                      { title: "Half", value: "half" },
                    ],
                  },
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        }
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images.0',
        },
        prepare(selection) {
          const { images, image } = selection;

          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Alt text: ${image.alt}`,
            media: image,
          };
        },
      },
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "hading",
              title: "Heading",
              type: "string",
            },
            {
              name: "short_text",
              title: "Short Text",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "url",
            },
          ]
        }
      ]
    },
    {
      title: 'Related Project',
      name: 'related_project',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'projects' }
          ]
        }
      ]
    },

  ]
}