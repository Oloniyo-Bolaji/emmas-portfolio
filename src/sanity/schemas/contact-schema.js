export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "instagram",
      title: "instagram",
      type: "url",
    },
    {
      name: "x",
      title: "X",
      type: "url",
    },
    {
      name: "whatsapp",
      title: "Whatsapp",
      type: "string", 
      validation: Rule => Rule.regex(/^\+?\d+$/, {
        name: 'phone number',
        invert: false,
      }),
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
    },
  ],
};
