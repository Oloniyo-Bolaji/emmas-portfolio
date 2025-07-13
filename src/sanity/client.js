import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "j1xp2amp",
  dataset: "production",
  apiVersion: "2025-07-11",
  useCdn: true,
});
