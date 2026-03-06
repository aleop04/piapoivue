<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imagen: {
    type: String,
    required: true, // Obligatorio
  },

  titulo: {
    type: String,
    required: true,
  },

  ubicacion: {
    type: String,
    default: 'Ubicación desconocida',
  },

  puntuacion: {
    type: [Number, String],
    default: '0.0',
  }

});
</script>

<template>
  <div
    class="relative w-54 h-[400px] rounded-[2rem] shadow-sm p-6 flex flex-col justify-end overflow-hidden bg-cover bg-center transition-transform duration-300 hover:scale-110"
    :style="{ backgroundImage: `url('${encodeURI(props.imagen)}')` }">

    <div class="flex flex-col gap-2.5">

      <h2 class="font-bold font-[Nunito] text-3xl text-white leading-tight">
        {{ props.titulo }}
      </h2>

      <div class="flex items-center gap-1.5 text-white">
        <div class="h-5 w-5 bg-white"
          style="mask-image: url('/Iconos/geo-alt.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/geo-alt.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>
        <span class="text-lg  font-light">{{ props.ubicacion }}</span>
      </div>

      <div class="flex items-center gap-1.5 text-white">
        <div class="h-5 w-5 bg-white"
          style="mask-image: url('/Iconos/star.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/star.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>
        <span class="text-lg font-light">{{ props.puntuacion }}</span>
      </div>


    </div>
  </div>
</template>
