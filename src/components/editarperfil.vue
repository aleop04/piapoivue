<script setup>
import { ref } from 'vue'

const emit = defineEmits(['cancelar', 'guardar'])

const nombre = ref('')
const apellidos = ref('')
const correo = ref('')
const contrasena = ref('')
const ubicacion = ref('')
const descripcion = ref('')
</script>

<template>
  <div class="bg-[#FFDE594C] rounded-[80px] p-10 w-[1200px] flex flex-col relative">

    <div class="flex items-center gap-6 mb-24">

    <!-- ICONO PERFIL -->
    <div class="relative group cursor-pointer">

        <div class="w-[120px] h-[120px] bg-[#FF7608]"
        style="mask-image: url('/Iconos/person-circle.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/person-circle.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <!-- TEXTO HOVER -->
        <div
        class="absolute inset-0 flex items-center justify-center text-[#442F2F] text-[18px] font-[Nunito_Sans] font-semibold opacity-0 group-hover:opacity-100 transition bg-white/70 rounded-full"
        >
        Subir foto
    </div>

  </div>

  <div>
    <h1 class="text-5xl font-bold text-[#442F2F]">
      Editar perfil
    </h1>
  </div>

</div>

    <!-- DESCRIPCION EDITABLE -->
    <div class="w-[446px] relative left-[130px]">
      <textarea
        v-model="descripcion"
        placeholder="Descripción"
        class="w-full h-[142px] bg-[#FDF0D9] rounded-[40px] p-6 text-[#442F2F] text-[24px] outline-none resize-none placeholder:text-[#442F2F]/60"
      ></textarea>
    </div>

    <div class="mt-6 flex justify-center p-6">
      <div class="w-[494px] h-[82px] text-[#FF7608] text-[48px] font-bold font-[Nunito_Sans] text-center break-words">
        Información de cuenta
      </div>
    </div>

    <div class="mt-10 flex flex-row gap-6">
      <!-- nombre y apellidos -->
      <div class="flex flex-col gap-6 w-[623px] self-start">

        <div class="flex flex-col gap-6 w-full transform scale-75">
          <div class="text-[#442F2F] text-[40px] font-semibold">Nombre</div>
          <input
            v-model="nombre"
            type="text"
            placeholder="Nombre"
            class="w-full h-[114px] bg-[#FDF0D9] rounded-[65px] px-[35px] text-[#442F2F] text-[32px] outline-none placeholder:text-[#442F2F]/60"
          />
        </div>

        <div class="flex flex-col gap-6 w-full transform scale-75">
          <div class="text-[#442F2F] text-[40px] font-semibold">Apellidos</div>
          <input
            v-model="apellidos"
            type="text"
            placeholder="Apellidos"
            class="w-full h-[114px] bg-[#FDF0D9] rounded-[65px] px-[35px] text-[#442F2F] text-[32px] outline-none placeholder:text-[#442F2F]/60"
          />
        </div>
      </div>

      <!-- correo y contraseña -->
      <div class="flex flex-col gap-6 w-[623px] self-end">

        <div class="flex flex-col gap-6 w-full transform scale-75">
          <div class="text-[#442F2F] text-[40px] font-semibold">Correo</div>
          <input
            v-model="correo"
            type="email"
            placeholder="Correo"
            class="w-full h-[114px] bg-[#FDF0D9] rounded-[65px] px-[35px] text-[#442F2F] text-[32px] outline-none placeholder:text-[#442F2F]/60"
          />
        </div>

        <div class="flex flex-col gap-6 w-full transform scale-75">
          <div class="text-[#442F2F] text-[40px] font-semibold">Contraseña</div>
          <input
            v-model="contrasena"
            type="password"
            placeholder="Contraseña"
            class="w-full h-[114px] bg-[#FDF0D9] rounded-[65px] px-[35px] text-[#442F2F] text-[32px] outline-none placeholder:text-[#442F2F]/60"
          />
        </div>
      </div>
    </div>

    <!-- UBICACION EDITABLE -->
    <div class="mt-10 flex justify-center">
      <div class="flex flex-col gap-6 w-[623px] transform scale-75">
        <div class="text-[#442F2F] text-[40px] font-semibold text-center">Ubicación</div>

        <div class="relative w-full">
          <input
            v-model="ubicacion"
            type="text"
            placeholder="Ubicación"
            class="w-full h-[114px] bg-[#FDF0D9] rounded-[65px] px-[35px] pr-[80px] text-[#442F2F] text-[32px] outline-none placeholder:text-[#442F2F]/60"
          />

          <div class="absolute right-[35px] top-1/2 -translate-y-1/2 w-[32px] h-[32px] bg-[#442F2F]/60"
            style="mask-image: url('/Iconos/search.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/search.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
          </div>
        </div>
      </div>
    </div>

    <div class="pt-24 flex justify-center gap-[92px]">
        <button
            @click="emit('guardar')"
            class="px-[49px] py-[13px] bg-[#FF7608] rounded-[50px] shadow-md text-[#FFEBC9] text-[32px] font-bold font-[Nunito_Sans] hover:scale-105 transition"
        >
            Confirmar cambios
        </button>

        <button
                @click="emit('cancelar')"
                class="px-[49px] py-[13px] bg-[#FF0000] rounded-[50px] shadow-md text-[#FFEBC9] text-[32px] font-bold font-[Nunito_Sans]"
        >
            Cancelar
        </button>
    </div>
  </div>
</template>