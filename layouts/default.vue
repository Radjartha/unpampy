<template>
    <div>
        <Navbar />
      <slot />
      <div class="pt-24">
      <Footer />
    </div>
    </div>
  </template>
  
  <script setup>
    import Footer from '~/components/Footer.vue'; 
  import Navbar from '~/components/Navbar.vue'; 
  </script>