<template >
  <div class="grid md:grid-cols-3 overflow-y-auto max-h-[calc(100vh-5rem)] md:max-h-full"><!-- Added div wrapper -->

<!-- Items -->
<ul class=" mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
    <!-- Tentang Unpam -->
    <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer" @click="toggleSubMenu('unpam')">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col grow">
        <span class="font-bold">Tentang Unpam</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
      <div class="my-auto "><svg
                xmlns="http://www.w3.org/2000/svg"
                class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg></div>
    </li>
    <ul v-if="openSubMenu === 'unpam'" class="pl-8 mb-4 space-y-4 md:mb-0 p-2">
    <li>
      <span class="font-bold">Tentang Unpam</span>
      <h1 class="pt-2"><NuxtLink to="/sambutan-rektor">Sambutan Rektor</NuxtLink></h1>
      <h1 class="pt-2"><NuxtLink to="/profil-unpam">Profil Unpam</NuxtLink></h1>
      <h1 class="pt-2"><NuxtLink to="/sejarah">Sejarah</NuxtLink></h1>
      <h1 class="pt-2"><NuxtLink to="/visi-misi">Visi Misi</NuxtLink></h1>
      <h1 class="pt-2"><NuxtLink to="/visi-misi">Struktur Organisasi</NuxtLink></h1>
    </li>
  </ul>
    <!-- Kegiatan -->
    <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer" @click="toggleSubMenu('kegiatan')">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col grow">
        <span class="font-bold">Kegiatan</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
      <div class="my-auto "><svg
                xmlns="http://www.w3.org/2000/svg"
                class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg></div>
    </li>
    <ul v-if="openSubMenu === 'kegiatan'" class="pl-8 mb-4 space-y-4 md:mb-0 p-2">
    <li>
      <span class="font-bold">Mahasiswa</span>
      <h1><NuxtLink to="/layanan-mahasiswa">Layanan Mahasiswa</NuxtLink></h1>
      <h1><NuxtLink to="/informasi-akademik">Informasi Akademik</NuxtLink></h1>
      <h1><NuxtLink to="/kalender-akademik">Kalender Akademik</NuxtLink></h1>
      <h1><NuxtLink to="/beasiswa">Beasiswa</NuxtLink></h1>
    </li>
  </ul>
    <!-- Lembaga -->
    <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer" @click="toggleSubMenu('lain-lain')">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col grow">
        <span class="font-bold">Lain-lain</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
      <div class="my-auto "><svg
                xmlns="http://www.w3.org/2000/svg"
                class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg></div>
    </li>

  </ul>
      <!-- Submenu untuk Mahasiswa -->
      <ul v-if="openSubMenu === 'lain-lain'" class="pl-8 mb-4 space-y-4 md:mb-0 p-2">
        <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col">
        <span class="font-bold">Tentang Unpam</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
        </li>
        <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col">
        <span class="font-bold">Tentang Unpam</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
        </li>
        <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col">
        <span class="font-bold">Tentang Unpam</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
        </li>
      </ul>
      <ul v-if="openSubMenu === 'lain-lain'" class="pl-8 mb-4 space-y-4 md:mb-0 p-2">
        <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col">
        <span class="font-bold">Tentang Unpam</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
        </li>
        <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col">
        <span class="font-bold">Tentang Unpam</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
        </li>
        <li class="flex flex-row hover:bg-slate-600 p-2 cursor-pointer">
      <div><img src="../public/logo-unpam-300x291.png" class="w-12" alt=""></div>
      <div class="pl-4 flex flex-col">
        <span class="font-bold">Tentang Unpam</span>
        <span class="text-gray-400">Kenal Lebih Dekat Dengan Unpam</span>
      </div>
        </li>
      </ul>
    </div> 
</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const openSubMenu = ref(null);

// Fungsi untuk membuka/menutup submenu
const toggleSubMenu = (menu) => {
  openSubMenu.value = openSubMenu.value === menu ? null : menu;
};
</script>