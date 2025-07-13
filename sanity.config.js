import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./src/sanity/schemas";


export default defineConfig({
  title: "e-admin",
  projectId: "j1xp2amp",
  dataset: "production",
  title: "Emma-portfolio",
  apiVersion: "2025-07-11",
  basePath:"/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
