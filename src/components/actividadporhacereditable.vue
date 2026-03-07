<script setup>
import { ref } from 'vue'

const actividad = ref('')
const lugar = ref('')
const fecha = ref('')
const horaInicio = ref('')
const horaFin = ref('')
const calificacion = ref('5.5')

const hoy = new Date().toISOString().split('T')[0]
</script>

<template>
  <div class="bg-[#FDF0D9] shadow-md rounded-[25px] px-[78px] py-[24px] flex flex-col justify-center items-start gap-[40px]">

    <!-- fila superior -->
    <div class="flex items-center gap-[40px] w-full justify-center">

      <input
        v-model="actividad"
        type="text"
        placeholder="Actividad por hacer"
        class="bg-transparent text-[#442F2F] text-[55px] font-normal font-[Nunito_Sans] outline-none placeholder:text-[#442F2F]/50 w-[500px]"
      />

      <div class="flex items-center gap-[8px] h-[25px]">
        <div
          class="w-[26px] h-[26px] bg-[#FF7608]"
          style="mask-image: url('/Iconos/geo-alt.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/geo-alt.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <input
          v-model="lugar"
          type="text"
          placeholder="Lugar"
          class="bg-transparent text-[#442F2F] text-[24px] font-normal font-[Nunito_Sans] outline-none placeholder:text-[#442F2F]/50 w-[180px]"
        />
      </div>
    </div>

    <!-- fila inferior -->
    <div class="w-full flex justify-center items-center gap-[80px] px-[40px] flex-wrap">

      <!-- fecha -->
      <div class="flex items-center gap-[8px]">
        <div
          class="w-[24px] h-[24px] bg-[#FF7608] opacity-50"
          style="mask-image: url('/Iconos/calendar-event.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/calendar-event.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <input
          v-model="fecha"
          type="date"
          :min="hoy"
          class="bg-transparent text-[#442F2F] text-[20px] font-normal font-[Nunito_Sans] outline-none"
        />
      </div>

      <!-- horario -->
      <div class="flex items-center gap-[6px]">
        <div
          class="w-[22px] h-[22px] bg-[#FF7608] opacity-50"
          style="mask-image: url('/Iconos/clock.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/clock.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <div class="flex items-center gap-2">
          <input
            v-model="horaInicio"
            type="time"
            class="bg-transparent text-[#442F2F] text-[20px] font-normal font-[Nunito_Sans] outline-none"
          />
          <span class="text-[#442F2F] text-[20px]">-</span>
          <input
            v-model="horaFin"
            type="time"
            class="bg-transparent text-[#442F2F] text-[20px] font-normal font-[Nunito_Sans] outline-none"
          />
        </div>
      </div>

      <!-- calificacion -->
      <div class="flex items-center gap-[13px]">
            <div
            class="w-[24px] h-[24px] bg-[#FF7608] opacity-50"
            style="mask-image: url('/Iconos/star.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/star.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
            </div>
            <div class="opacity-50 text-[#442F2F] text-[20px] font-normal font-[Nunito_Sans] break-words">
                5.5
            </div>
      </div>
    </div>
  </div>
</template>