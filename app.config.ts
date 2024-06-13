import { defineAppConfig } from "#imports";

export default defineAppConfig({
  name: "Nuxt Multi Tenant",
  description: "UwU",
  url: import.meta.env.PROD ? "https://unpam.ac.id" : "http://localhost:3000",
  author: {
    name: "Radjartha",
    link: "https://github.com/hieuhani",
  },
});