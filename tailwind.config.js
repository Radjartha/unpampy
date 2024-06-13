/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./node_modules/flowbite/**/*.{js,ts}",
  "presets/**/*.{js,vue,ts}" // this is optional if you are using @nuxtjs/tailwindcss
],
theme: {
  colors : {
    'kunpam' : '#ECB200',
    'bunpam' : '#06234d',


    
  },
  container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '5rem',
      xl: '6rem',
      '2xl': '6rem',
    },
  },
  extend: {},
},
plugins: [
  require('flowbite/plugin')
],
}