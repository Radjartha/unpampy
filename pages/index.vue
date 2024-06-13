<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import { useFetch, useAppConfig } from "#imports";
const config = useAppConfig();

const [protocol, hostname] = config.url.split("//");
const jobLink = `${protocol}//news.${hostname}`;

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
</script>

<template >
<div class="pt-20 md:pt-0">
    <img src="../public/serah2.jpg" class="bg-cover w-full  bg-center " alt="">
</div>
<!-- Card -->
<div class="bg-[#f9f9f9]  shadow-inner ">
    <div class="container mx-auto  ">
<section id="features"
    class="relative block px-6 py-10 md:py-20 md:px-10 ">
    <div class="relative mx-auto max-w-5xl text-center">
        <span class="text-black  my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Jalan pintas untuk navigasi lebih cepat
        </span>

    </div>
    <div class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-4   pt-14 sm:grid-cols-2 lg:grid-cols-6">
        <div class="rounded-md  p-8 text-center shadow-md">
            <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style="background-color: #1E293B">
                <p class="text-white">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
</svg>
</p>
            </div>
            <h3 class="mt-6 ">My Dosen</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide ">Dashboard Dosen
            </p>
            <p class="mt-4">Learn more →</p>
        </div>


        <div class="rounded-md  p-8 text-center shadow-md">
            <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style="background-color: #1E293B">
                <p class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></p>
            </div>
            <h3 class="mt-6 ">My Dosen</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide ">Dashboard Dosen
            </p>
        </div>


        <div class="rounded-md  p-8 text-center shadow-md">
            <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style="background-color: #1E293B">
                <p class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></p>
            </div>
            <h3 class="mt-6 ">My Dosen</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide ">Dashboard Dosen
            </p>
        </div>

        <div class="rounded-md  p-8 text-center shadow-md">
            <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style="background-color: #1E293B">
                <p class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></p>
            </div>
            <h3 class="mt-6 ">My Dosen</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide ">Dashboard Dosen
            </p>
        </div>

        <div class="rounded-md  p-8 text-center shadow-md">
            <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style="background-color: #1E293B">
                <p class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></p>
            </div>
            <h3 class="mt-6 ">My Dosen</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide ">Dashboard Dosen
            </p>
        </div>

        <div class="rounded-md  p-8 text-center shadow-md">
            <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                style="background-color: #1E293B">
                <p class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></p>
            </div>
            <h3 class="mt-6 ">My Dosen</h3>
            <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide ">Dashboard Dosen
            </p>
        </div>
    </div>



</section>
</div>

</div>
<!-- Rencana Studi -->
<main>
<div class="backg-studi">
    <div class="container mx-auto py-24">
    <!-- Header -->
        <div>        
        <h1 class="text-6xl text-white font-inter-black pb-4">Rencana Studi</h1>
        <p class="text-xl leading-7 text-[#9CA3AF]">Jika kamu bermimpi besar, universitas adalah tempat untuk mewujudkannya. 
Jadilah pionir perubahan dengan mendaftar sekarang!</p>
    </div>
    <!-- Card -->
    <div class="mt-24 flex flex-col min-[1278px]:flex-row gap-4">
        <!-- 1 -->
        <div class="flex flex-col items-center justify-center">
            <div class="">
    <img src="../public/D4.jpeg" class="h-auto md:h-[500px] w-auto object-cover  max-w-full shadow-md rounded-lg" alt=""></div>
    <div class="w-56 p-2 -mt-[120px] overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
<h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Program Sarjana Muda <span>D-3</span></h3>
    </div>
        </div>
        <!-- 1 -->
        <div class="mt-16 min-[1276px]:mt-0 flex flex-col items-center justify-center">
            <div class="">
    <img src="../public/D4.jpeg" class="h-auto md:h-[500px] w-auto object-cover  max-w-full shadow-md rounded-lg" alt=""></div>
    <div class="w-56 p-2 -mt-[120px] overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
<h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Program Sarjana Muda <span>D-3</span></h3>
    </div>
        </div>
                <!-- 1 -->
                <div class="mt-16 min-[1276px]:mt-0 flex flex-col items-center justify-center">
            <div class="">
    <img src="../public/D4.jpeg" class="h-auto md:h-[500px] w-auto object-cover  max-w-full shadow-md rounded-lg" alt=""></div>
    <div class="w-56 p-2 -mt-[120px] overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
<h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Program Sarjana Muda <span>D-3</span></h3>
    </div>
            </div>
                <!-- 1 -->
                <div class="mt-16 min-[1276px]:mt-0 flex flex-col items-center justify-center">
            <div class="">
    <img src="../public/D4.jpeg" class="h-auto md:h-[500px] w-auto object-cover  max-w-full shadow-md rounded-lg" alt=""></div>
    <div class="w-56 p-2 -mt-[120px] overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
<h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Program Sarjana Muda <span>D-3</span></h3>
    </div>
        </div>
    </div>
    </div>    
</div>
</main>
<!-- Gallery -->
<main class="container mx-auto py-24">
    
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
        </div>
    </div>
</div>

</main>

<div class="card container mx-auto">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded-md m-2 p-3">
                    <div class="mb-3">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded-md" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>

                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
<h1 class="font-inter-regular">halo</h1>
<a :href="jobLink" class="jobs-link">Jobs</a>
</template>


<style scoped>
.backg-studi {
  background: linear-gradient(to top, #084777 0%, #084777 50%, #06234d 50%, #06234d 100%);
  height: auto;
}

@media (max-width: 1280px) {
  .backg-studi {
    height: auto;
  }
}

</style>