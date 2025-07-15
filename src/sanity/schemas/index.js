import aboutSchema from "./about-schema";
import heroSchema from "./hero-schema";
import contactSchema from "./contact-schema";
const { default: projectsSchema } = require("./projects-schema");
const { default: skillsSchema } = require("./skills-schema");
import certSchemas from "./cert-schemas";
import toolsSchemas from "./tools-schema"

const schemas = [
  heroSchema,
  aboutSchema,
  toolsSchemas,
  skillsSchema,
  certSchemas,
  projectsSchema,
  contactSchema,
];

export default schemas;
