export default {
  name: "certs",
  title: "Certs",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Certificate title",
    },
    {
      name: "skill",
      title: "Skill",
      type: "string",
      description: "Skill learnt",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "link to Certificate ",
    },
  ],
};
