export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "techField",
      title: "TechField",
      type: "string",
    },
    {
      name: "resume",
      title: "Resume (PDF)",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
   {
      name: "instagram",
      title: "Instagram",
      type: "url",
    },
     {
      name: "linkedin",
      title: "Linkedin",
      type: "url",
    },
     {
      name: "x_twitter",
      title: "X (Twitter)",
      type: "url",
    },
     {
      name: "profilePicture",
      title: "ProfilePicture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
