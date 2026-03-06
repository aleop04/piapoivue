<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    foto_perfil: {
        type: String,
        required: true,
    },

    nombre_usuario: {
        type: String,
        required: true,
    }
});

//cambiar vista
const mostrarVideollamada = ref(false);
const toggleVideollamada = () => {
    mostrarVideollamada.value = !mostrarVideollamada.value;
};

import MensajeRecibido from '@/components/MensajeRecibido.vue'
import MensajeEnviado from '@/components/MensajeEnviado.vue'

</script>

<template>

    <div class="bg-[#FDF0D9] rounded-[2rem] shadow-sm w-full max-h-200  flex flex-col overflow-hidden">

        <!--videollamada-->
        <div v-if="mostrarVideollamada" class="flex-1 flex flex-col p-6 animate-fade-in">
            <div class="grid grid-cols-2 gap-4 flex-1" m-5>
                <div v-for="i in 4" :key="i" class="bg-[#666666] rounded-3xl aspect-video shadow-inner"></div>
            </div>

            <div class="flex justify-center items-center gap-6 mt-6">


                <button
                    class="flex items-center justify-center flex-shrink-0 rounded-full bg-[#FF0000] w-9 h-9 transition-transform duration-300 hover:scale-110">
                    <div class="h-5 w-5 bg-[#FFEBC9]"
                        style="mask-image: url('/Iconos/mic-mute-fill.svg'); mask-repeat: no-repeat; mask-position: center; mask-size: contain; -webkit-mask-image: url('/Iconos/mic-mute-fill.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; -webkit-mask-size: contain;">
                    </div>
                </button>



                <button @click="toggleVideollamada"
                    class="flex items-center justify-center flex-shrink-0 rounded-full bg-[#FF0000] w-9 h-9 transition-transform duration-300 hover:scale-110">
                    <div class="h-5 w-5 bg-[#FFEBC9]"
                        style="mask-image: url('/Iconos/telephone-x-fill.svg'); mask-repeat: no-repeat; mask-position: center; mask-size: contain; -webkit-mask-image: url('/Iconos/telephone-x-fill.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; -webkit-mask-size: contain;">
                    </div>
                </button>


               <button
                    class="flex items-center justify-center flex-shrink-0 rounded-full bg-[#FF7608] w-9 h-9 transition-transform duration-300 hover:scale-110">
                    <div class="h-5 w-5 bg-[#FFEBC9]"
                        style="mask-image: url('/Iconos/camera-video.svg'); mask-repeat: no-repeat; mask-position: center; mask-size: contain; -webkit-mask-image: url('/Iconos/camera-video.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; -webkit-mask-size: contain;">
                    </div>
                </button>

            </div>
        </div>


        <!--chats-->
        <div v-else class="flex flex-col flex-1">
            <!--header chat-->
            <div class="flex justify-between items-center m-4 p-5">
                <!--datos del usuario-->
                <div class="flex items-center gap-4">
                    <img :src="foto_perfil" :alt="nombre_usuario" class="rounded-full w-9 h-9" />
                    <h2 class="font-[Nunito] text-2xl text-[#604646]">{{ nombre_usuario }}</h2>
                </div>


                <button @click="toggleVideollamada"
                    class="flex items-center justify-center flex-shrink-0 rounded-full bg-[#FF7608] w-9 h-9 transition-transform duration-300 hover:scale-110">
                    <div class="h-5 w-5 bg-[#FFEBC9]"
                        style="mask-image: url('/Iconos/camera-video.svg'); mask-repeat: no-repeat; mask-position: center; mask-size: contain; -webkit-mask-image: url('/Iconos/camera-video.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; -webkit-mask-size: contain;">
                    </div>
                </button>

            </div>

            <!--mensajes-->
            <div class="flex-1 overflow-y-auto max-h-[410px] p-4 flex flex-col gap-2">
                <MensajeRecibido :foto_perfil="foto_perfil" contenido="Hola, ¿cómo estás?" />
                <MensajeEnviado :foto_perfil="foto_perfil" contenido="¡Hola! Estoy bien, gracias. ¿Y tú?" />
                <MensajeRecibido :foto_perfil="foto_perfil" contenido="Estoy bien también, gracias por preguntar." />
                <MensajeEnviado :foto_perfil="foto_perfil" contenido="¡Genial! ¿A dónde iremos hoy?" />
                <MensajeRecibido :foto_perfil="foto_perfil"
                    contenido="Puedes revisar los lugares con mejores reseñas." />
                <MensajeEnviado :foto_perfil="foto_perfil" contenido="¡Eso suena genial!." />
                <MensajeEnviado :foto_perfil="foto_perfil"
                    contenido="Las mejores guías turísticas para visitar en México durante el mundial de futbol 2026.Las mejores guías turísticas para visitar en México durante el mundial de futbol 2026." />

            </div>

            <!-- inputs mensaje -->

            <hr class="my-4 border-[#FF7608]  rounded-[2rem] m-5" />

            <div class="border-t-2 border-[#F97316] pt-2 px-4 pb-4 flex items-center gap-3">
                <input type="text" placeholder="Escribe tu mensaje aquí..." class="w-full px-4 rounded-full text-md text-[#604646] transition-all duration-300
               focus:outline-none focus:border-orange-400 
               focus:shadow-[0_4px_10px_rgba(0,0,0,0.1)] placeholder-[#604646]-400 p-2">
                <button class="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                    <div class="h-6 w-6 bg-[#F97316]"
                        style="mask-image: url('/Iconos/send.svg'); mask-repeat: no-repeat; mask-position: center; mask-size: contain; -webkit-mask-image: url('/Iconos/send.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-position: center; -webkit-mask-size: contain;">
                    </div>
                </button>
            </div>
        </div>
    </div>

</template>