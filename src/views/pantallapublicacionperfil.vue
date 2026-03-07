<script setup>
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import Footer from '@/components/Footer.vue'
import actividadporhacereditable from '@/components/actividadporhacereditable.vue'
import descripcionescribir from '@/components/descripcionescribir.vue'
import galeriaeditable from '@/components/galeriaeditable.vue'

import { ref } from 'vue'

const mostrarMensaje = ref(false)

const realizarCambios = () => {
  mostrarMensaje.value = true
}
const cerrarMensaje = () => {
  mostrarMensaje.value = false
}

</script>

<template>
<section class="bg-[#FFEBC9] min-h-screen flex flex-col">

  <!-- barra d navegacion -->
  <BarraBusqueda />

  <!-- lo k va adentro -->
  <main class="flex-grow w-full flex flex-col items-center p-10 pb-32">

    <div class="relative group w-[1600px] max-w-full h-[739px] rounded-[25px] bg-[#FF7608] flex items-center justify-center cursor-pointer">
        <!-- texto que aparece al pasar el mouse -->
        <span class="opacity-0 group-hover:opacity-100 text-white text-4xl font-bold transition">
        Subir foto
        </span>
    </div>

    <div class="relative -top-27 z-10">
    <actividadporhacereditable />
  </div>
  
  <div class="flex flex-col gap-20">
  
  <descripcionescribir />

  <div class="flex gap-[39px]">
    <galeriaeditable v-for="i in 4" :key="i" />
  </div>

  <descripcionescribir />
</div>

  <div class="flex items-center gap-[85px] p-16">
    <!-- botón subir actividad -->
    <button
      @click="realizarCambios"
      type="button"
      class="w-[314px] h-[72px] bg-[#FF7608] rounded-[50px] shadow-md text-[#FFEBC9] text-[32px] font-bold font-['Nunito_Sans'] flex items-center justify-center cursor-pointer hover:brightness-110 transition"
    >
      Realizar cambios
    </button>
  </div>

  </main>

  <!-- Footer -->
  <Footer />

<div
  v-if="mostrarMensaje"
  @click="cerrarMensaje"
  class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
>

  <div
    class="px-[131px] py-[77px] bg-[#00BF63] rounded-[144px]
           flex flex-col justify-center items-center"
  >
    <div
      class="w-[641px] text-center text-white text-[40px]
             font-extrabold font-['Nunito_Sans']"
    >
      ¡Cambios realizados!
    </div>
  </div>

</div>

</section>
</template>