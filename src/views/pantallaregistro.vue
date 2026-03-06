<script setup>
import { RouterLink } from 'vue-router'
import BotonBase from '@/components/BotonBase.vue'
</script>

<template>
  <div class="min-h-screen bg-[#FFEBC9] flex flex-col md:flex-row items-center justify-center p-8 gap-10">

    <div class="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
      <img src="/destinariologo2.png" alt="Destinario Logo" class="w-70 mb-4 items-center" />

      <p class="text-[#604646] font-[Asul] font-medium text-bold text-lg leading-relaxed">
        Regístrate y obtendrás guías turísticas para visitar en México durante el mundial de futbol 2026.
      </p>

      <div class="w-full mt-10 hidden md:block">
         <img src="/grafico registro.png" alt="Portada" class="w-200 mb-4 items-center" />
      </div>
    </div>

    <div class="bg-transparent w-full max-w-xl">
      <h1 class="text-[#FF7608] text-3xl font-bold font-[Nunito] text-center mb-10 p-10">Crear una cuenta</h1>

      <form @submit.prevent class="grid grid-cols-2 gap-x-6 gap-y-4  font-[Nunito] text-xl">

        <div class="flex flex-col">
          <label class="text-[#604646] font-bold mb-1 ml-2">Nombre(s)</label>
          <input
            class="w-full rounded-full border-none bg-[#FDF0D9] p-3 outline-none placeholder:text-[#604646]/50 shadow-sm font-[Nunito] text-xl text-[#604646]"
            type="text" placeholder="Nombre" />
        </div>

        <div class="flex flex-col">
          <label class="text-[#604646] font-bold mb-1 ml-2">Apellidos</label>
          <input type="text"
            class="w-full rounded-full border-none bg-[#FDF0D9] p-3 outline-none placeholder:text-[#604646]/50 shadow-sm font-[Nunito] text-xl text-[#604646]"
            placeholder="Apellidos" />
        </div>

        <div class="flex flex-col">
          <label class="text-[#604646] font-bold mb-1 ml-2">Correo electrónico</label>
          <input
            class="w-full rounded-full border-none bg-[#FDF0D9] p-3 outline-none placeholder:text-[#604646]/50 shadow-sm font-[Nunito] text-xl text-[#604646]"
            type="mail" placeholder="Correo" />
        </div>

        <div class="flex flex-col">
          <label class="text-[#604646] font-bold mb-1 ml-2">Contraseña</label>
          <input type="password"
            class="w-full rounded-full border-none bg-[#FDF0D9] p-3  outline-none placeholder:text-[#604646]/50 shadow-sm font-[Nunito] text-xl text-[#604646]"
            placeholder="Contraseña" />
        </div>

        <div class="flex flex-col col-span-2 relative">
          <label class="text-[#604646] font-bold mb-1">Ubicación</label>
          <div class="relative">
            <input
              class="w-full rounded-full border-none bg-[#FDF0D9] p-3 outline-none placeholder:text-[#604646]/50 shadow-sm font-[Nunito] text-xl text-[#604646]"
              type="text" placeholder="Buscar Ubicación" />
            <span class="absolute right-3 top-3 text-[#604646]/50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>
        
        <div class="col-span-2 flex justify-center mt-8 p-5">
           <router-link to="/principal" class="flex text-center items-center"> <!--navegacion por ahora-->
          <BotonBase text="Registrar" />
        </router-link>

        </div>
       
        
      </form>
    </div>

  </div>

</template>