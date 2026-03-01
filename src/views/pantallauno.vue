<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">

    <!-- foto fondo -->
  <div 
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/fotofondo.jpg');"
    ></div>

    <!-- naranja encima -->
    <div class="absolute inset-0 bg-[#FF7608]/70"></div>

    <!-- logo destinario + mini texto -->
  <div class="relative z-10 flex flex-col items-center justify-center min-h-screen text-center gap-3">
    <img 
      src="/destinariologo3.png" 
      alt="Destinario"
      class="w-[750px]"
    />

    <p class="font-['Asul'] text-white text-2xl md:text-4xl font-normal text-center max-w-4xl">
        Las mejores guías turísticas para visitar en México durante el mundial
        de futbol 2026.
    </p>
  </div>

  </section>
</template>