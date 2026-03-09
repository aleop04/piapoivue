<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const busqueda = ref('')

const buscar = () => {
  if (!busqueda.value.trim()) return

  router.push({
    path: '/pantallaresultado',
    query: { q: busqueda.value }
  })
}

</script>

<template>
  <nav class="w-full h-[125px] bg-[#FF7608] shadow-[0px_3px_5.3px_rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-center">
    <div class="w-[1327px] h-[81px] flex items-center justify-center gap-[63px]">

      <!-- logos -->
      <RouterLink to="/principal" class="flex items-center">
        <img
          src="/destinariologo3.png"
          alt="Logo texto"
          class="w-[258px] h-[48px] object-contain"
        />
        <img
          src="/destinariologo1.png"
          alt="Logo icono"
          class="w-[74px] h-[74px] object-contain"
        />
      </RouterLink>

      <!-- barra de búsqueda -->
      <div class="w-[665px] h-[34px] px-[10px] rounded-[9px] border border-[#FFEBC9] flex items-center gap-[10px] bg-transparent">
        <input
          v-model="busqueda"
          @keyup.enter="buscar"
          type="text"
          placeholder="Buscar..."
          class="flex-1 bg-transparent outline-none text-[#FFEBC9] placeholder:text-[#FFEBC9]/70 font-[Nunito_Sans] text-[16px]"
        />

        <button
          type="button"
          @click="buscar"
          class="w-[16px] h-[16px] bg-[#F6C7A2] cursor-pointer"
          style="mask-image: url('/Iconos/search.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/search.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"
        ></button>
      </div>

      <!-- iconos derecha -->
      <div class="w-[204px] h-[43px] flex items-center gap-[30px]">

        <RouterLink to="/agregar" class="w-[48px] h-[48px] flex items-center justify-center">
          <div
            class="w-[36px] h-[36px] bg-[#FFEBC9]"
            style="mask-image: url('/Iconos/plus-circle.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/plus-circle.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"
          ></div>
        </RouterLink>

        <RouterLink to="/chats" class="w-[48px] h-[48px] flex items-center justify-center">
          <div
            class="w-[36px] h-[36px] bg-[#FFEBC9]"
            style="mask-image: url('/Iconos/chat.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/chat.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"
          ></div>
        </RouterLink>

        <RouterLink to="/perfil" class="w-[48px] h-[48px] flex items-center justify-center">
          <div
            class="w-[36px] h-[36px] bg-[#FFEBC9]"
            style="mask-image: url('/Iconos/person-circle.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/person-circle.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"
          ></div>
        </RouterLink>

      </div>
    </div>
  </nav>
</template>