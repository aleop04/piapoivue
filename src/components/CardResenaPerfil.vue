<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router'

const props = defineProps({
  imagen: {
    type: String,
    required: true, 
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
  },

  contenido: {
    type: String,
    default: 'Sin contenido disponible.', // Valor por defecto
  },
});
</script>

<template>
  <RouterLink 
    to="/pantallapublicacionperfil"
    class="bg-[#FDF0D9] rounded-[2rem] shadow-sm p-5 max-w-sm flex flex-col gap-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
  > 

    <img :src="props.imagen" :alt="props.titulo" class="w-full h-48 object-cover rounded-[1.5rem]" />

    <div class="flex flex-col gap-2.5">

      <h2 class="font-[Nunito] font-bold text-2xl text-[#604646] leading-tight">
        {{ props.titulo }}
      </h2>

      <div class="flex items-center gap-1.5 text-gray-700">

        <div class="h-5 w-5 bg-[#FF7608]"
          style="mask-image: url('/Iconos/geo-alt.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/geo-alt.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>
        <span class="text-lg">{{ props.ubicacion }}</span>
      </div>

      <div class="flex items-center gap-1.5 text-gray-700">
        <div class="h-5 w-5 bg-[#FF7608]"
          style="mask-image: url('/Iconos/star.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/star.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>
        <span class="text-lg font-medium">{{ props.puntuacion }}</span>
      </div>

      <p class="text-[#442F2F] text-sm leading-relaxed italic">
        "{{ props.contenido }}"
      </p>

    </div>

  </RouterLink>
</template>
