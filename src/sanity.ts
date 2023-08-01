import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "gcqtounw",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
};
const client = createClient(config);

const data = await client.fetch<number>(`count(*)`);

console.log(`Number of documents: ${data}`);
