<template>
    <div>
      <NavBar /> 
      <slot />
      <div class="pt-24">
      <Footer />
    </div>
    </div>
  </template>
  
  <script setup>
    import Footer from '../components/Footer.vue'; 
  import NavBar from '../components/NavBar.vue'; 
  </script>