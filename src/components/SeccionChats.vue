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
    }
});

import MensajeRecibido from '@/components/MensajeRecibido.vue'
import MensajeEnviado from '@/components/MensajeEnviado.vue'  
</script>

<template>

    <div class="bg-[#FDF0D9] rounded-[2rem] shadow-sm w-full h-full  flex flex-col">
        <!--header chat-->
        <div class="flex justify-between items-center m-4 p-5">
            <!--datos del usuario-->
            <div class="flex items-center gap-4">
                <img :src="foto_perfil" :alt="nombre_usuario" class="rounded-full w-9 h-9" />
                <h2 class="font-[Nunito] text-2xl text-[#604646]">{{ nombre_usuario }}</h2>
            </div>

            <div class="h-5 w-5 bg-white"
                style="mask-image: url('/Iconos/send.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/send.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
            </div>

        </div>

        <!--mensajes-->
        <div class="flex-1 overflow-y-auto p-4">
            <MensajeRecibido :foto_perfil="foto_perfil" contenido="Hola, ¿cómo estás?" />
            <MensajeEnviado :foto_perfil="foto_perfil" contenido="¡Hola! Estoy bien, gracias. ¿Y tú?" />
            <MensajeRecibido :foto_perfil="foto_perfil" contenido="Estoy bien también, gracias por preguntar." />
            <MensajeEnviado :foto_perfil="foto_perfil" contenido="¡Genial! ¿Qué has estado haciendo últimamente?" />
            <MensajeRecibido :foto_perfil="foto_perfil" contenido="He estado trabajando en algunos proyectos interesantes." />
            <MensajeEnviado :foto_perfil="foto_perfil" contenido="¡Eso suena genial! Me encantaría saber más sobre ellos." />
        
        </div>

        <!-- inputs mensaje -->

        <hr class="my-4 border-gray-300 p-5" />
        <div flex justify-between items-center gap-4
            <div>
                <input type="text" placeholder="Escribe tu mensaje aquí..."
                    class="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF7608]">
                <div class="h-5 w-5 bg-white"
                    style="mask-image: url('/Iconos/send.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/send.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
                </div>
            </div>
        </div>

</template>