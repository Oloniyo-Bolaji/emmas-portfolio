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
      name: "platform",
      title: "Platform",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "link to Certificate ",
    },
     {
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Set a number to control project display order (lower = higher priority)",
    },
  ],
};
