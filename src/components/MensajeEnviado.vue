<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    foto_perfil: {
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
    <div class="p-2 m-1 w-full h-full flex flex-col items-end bg-[#604646] rounded-[2rem] shadow-sm">

        <p class="text-gray-600 m-b-5 bg-[#FF7608] text-white p-3 rounded-full shadow-sm">{{ contenido }}</p>
        <div class="flex justify-between items-center gap-4">

            <div class="flex items center gap-4">
                <img :src="foto_perfil" alt="Foto de perfil" class="h-9 w-9 rounded-full" />
            </div>
        </div>

    </div>
</template>
