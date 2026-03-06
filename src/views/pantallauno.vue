<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import BotonBase from '@/components/BotonBase.vue'

const showLogin = ref(false)
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden flex items-center justify-center">

    <!-- foto fondo -->
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/fotofondo.jpg');"></div>

    <!-- naranja encima -->
    <div class="absolute inset-0 bg-[#FF7608]/70"></div>

    <!--logo ave-->
    <div class="absolute top-8 left-8 z-20">
      <img src="/public/destinariologo1.png" alt="Logo" class="w-25 h-25" />
    </div>

    <Transition name="fade" mode="out-in">

      <div v-if="!showLogin" key="welcome" class="relative min-h-screen flex flex-col items-center justify-center text-center gap-6 pt-10">
        <img src="/destinariologo3.png" alt="Destinario" class="w-[600px] md:w-[750px]" />

        <p class="font-['Asul'] text-white text-2xl md:text-4xl max-w-4xl px-4">
          Las mejores guías turísticas para visitar en México durante el mundial de fútbol 2026.
        </p>

        <BotonBase text="Iniciar Sesión"  @click="showLogin = true" />

        <div class="font-[Nunito] absolute bottom-0 bg-[#FFEBC9] py-12 px-40 rounded-t-3xl">
          <p class="text-[#604646] text-xl">
            ¿No tienes una cuenta? <br>
            <router-link to="/registro" class="font-bold underline">Regístrate aquí</router-link>
          </p>
        </div>
      </div>

      <!--Form inicio de sesion-->
      
      <div v-else key="login"
        class="relative z-10 bg-[#FFEBC9] p-10 rounded-[40px] shadow-xl flex flex-col items-center w-[90%] max-w-[600px]">
        <img src="/destinariologo2.png" alt="Destinario" class="max-w-[300px] md:max-w-[400px] mb-2" />
        <br>
        <form class="w-full flex flex-col gap-5 font-[Nunito] text-xl">
          <div class="flex flex-col" >
            <label class="text-[#604646] font-bold text-center mb-1">Correo electrónico</label>
            <input type="email" placeholder="Correo"
              class="rounded-full border-none bg-[#FDF0D9] p-3 text-center outline-none placeholder:text-[#604646]/50 shadow-sm">
          </div>

          <div class="flex flex-col">
            <label class="text-[#604646] font-bold text-center mb-1">Contraseña</label>
            <input type="password" placeholder="Contraseña"
              class="rounded-full border-none bg-[#FDF0D9] p-3 text-center outline-none placeholder:text-[#604646]/50 shadow-sm">
          </div>

          <router-link to="/principal" class="flex justify-center w-full"> <!--navegacion por ahora-->
            <BotonBase text="Iniciar Sesión" />
          </router-link>
        </form>

        <br>
        <button @click="showLogin = false" class="font-[Nunito] text-xs mt-4 text-[#604646] underline" >¿No tienes una cuenta? Regístrate
          aquí</button>
      </div>

    </Transition>
  </section>
</template>