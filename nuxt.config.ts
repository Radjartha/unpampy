// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  app: {
    head: {
      title: "Testing",
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    'nuxt-multi-tenancy'
  ],
  multiTenancy: {
    rootDomains: ["unpam.local", "unpampy.vercel.app"],
    sites: ["news"],
    customDomains: {
      "news.unpampy.vercel.app": "news",
      "news.unpam.local": "news",
    },
  },
  primevue: {
    options: {
      unstyled: true
    },
    importPT: { as: 'Aura', from: '~/presets/aura' }     //import and apply preset   
}
})