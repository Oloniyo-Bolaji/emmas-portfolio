import aboutSchema from "./about-schema";
import heroSchema from "./hero-schema";
import contactSchema from "./contact-schema";
const { default: projectsSchema } = require("./projects-schema");
const { default: toolsSchema } = require("./tools-schema");
const { default: skillsSchema } = require("./skills-schema");

const schemas = [
  toolsSchema,
  skillsSchema,
  projectsSchema,
  contactSchema,
  aboutSchema,
  heroSchema,
];

export default schemas;
