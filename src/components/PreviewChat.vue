<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    foto_perfil: {
        type: String,
        required: true, // Obligatorio
    },

    nombre_usuario: {
        type: String,
        required: true,
    },

    hora: {
        type: String,
        required: true,
    },

    contenido: {
        type: String,
        required: true,
    }

});

</script>


<template>
    <div class="p-2 m-1 w-full h-full flex flex-col">
        <div class="flex justify-between items-center gap-4">

            <div class="flex items-center gap-4">
                <img :src="foto_perfil" :alt="nombre_usuario" class="h-9 w-9 rounded-full" />
                <h3 class="font-[Nunito] text-lg text-[#604646]">{{ nombre_usuario }}</h3>
            </div>

            <p class="font-[Nunito] text-sm text-gray-500">{{ hora }}</p>

        </div>

        <p class="text-gray-600 m-b-5">{{ contenido }}</p>
        <hr class=" border-gray-300 my-2" />
    </div>

</template>