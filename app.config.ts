import { defineAppConfig } from "#imports";

export default defineAppConfig({
  name: "Nuxt Multi Tenant",
  description: "Multi-tenancy Nuxt sites support by sub-domains",
  url: import.meta.env.PROD ? "https://unpam.ac.id" : "http://localhost:3000",
  author: {
    name: "Radjartha",
    link: "https://github.com/hieuhani",
  },
});