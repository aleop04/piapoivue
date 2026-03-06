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
    <div class="p-2 w-full  flex flex-col justify-end">

        <div class="flex items-end gap-4 flex-row-reverse">

            <img :src="foto_perfil" alt="Foto de perfil" class="h-9 w-9 rounded-full flex-shrink-0" />

            <div class="bg-[#604646] rounded-[1rem] p-2 max-w-[50%] flex flex-col">
                <p class="text-white m-b-5 break-words whitespace-pre-wrap leading-relaxe">{{ contenido }}</p>
            </div>

        </div>
    </div>
</template>
