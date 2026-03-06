<script setup>
import { RouterLink } from 'vue-router'
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import BotonBase from '@/components/BotonBase.vue'
import PreviewChat from '@/components/PreviewChat.vue';
import Footer from '@/components/Footer.vue';
import SeccionChats from '@/components/SeccionChats.vue';
import MensajeRecibido from '@/components/MensajeRecibido.vue'
import MensajeEnviado from '@/components/MensajeEnviado.vue'  
</script>

<template>
  <section class="bg-[#FFEBC9] min-h-screen flex flex-col font-[Nunito]">

    <BarraBusqueda />

    <div class="flex flex-1 w-full p-6 gap-8">

      <aside class="w-1/4 flex flex-col gap-4">

        <div
          class="bg-[#FF7608] text-white p-4 rounded-2xl flex items-center justify-between shadow-md cursor-pointer transition-transform active:scale-95">
          <div class="flex items-center gap-3">
            <span class="text-2xl font-bold">Chats</span>
            <i class="bi bi-people-fill text-xl"></i>
          </div>
          <i class="bi bi-caret-right-fill"></i>
        </div>

        <div class="flex flex-col gap-2 overflow-y-auto max-h-[500px]">
          <PreviewChat foto_perfil="/foto perfil.png" nombre_usuario="Usuario" hora="12:00 PM"
            contenido="Lorem ipsum dolor sit am..." />
          <PreviewChat foto_perfil="/foto perfil.png" nombre_usuario="Usuario" hora="12:00 PM"
            contenido="Lorem ipsum dolor sit am..." />
          <PreviewChat foto_perfil="/foto perfil.png" nombre_usuario="Usuario" hora="12:00 PM"
            contenido="Lorem ipsum dolor sit am..." />
          <PreviewChat foto_perfil="/foto perfil.png" nombre_usuario="Usuario" hora="12:00 PM"
            contenido="Lorem ipsum dolor sit am..." />
          <PreviewChat foto_perfil="/foto perfil.png" nombre_usuario="Usuario" hora="12:00 PM"
            contenido="Lorem ipsum dolor sit am..." />
          <PreviewChat foto_perfil="/foto perfil.png" nombre_usuario="Usuario" hora="12:00 PM"
            contenido="Lorem ipsum dolor sit am..." />



        </div>
      </aside>

      <main class="flex w-3/4 overflow-hidden ">
        <SeccionChats foto_perfil="/foto perfil.png" nombre_usuario="Usuario" />
      </main>

    </div>
    <br>
    <Footer />
  </section>
</template>