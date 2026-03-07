<script setup>
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import Footer from '@/components/Footer.vue'
import actividadporhacer from '@/components/actividadporhacer.vue'
import comentario from '@/components/comentario.vue'

import { ref } from 'vue'

const mostrarMensaje = ref(false)
const comentarios = ref('')
const puntuacion = ref(0)

const seleccionarEstrella = (valor) => {
  if (puntuacion.value === valor) {
    puntuacion.value = 0
  } else {
    puntuacion.value = valor
  }
}

const enviarComentario = () => {
    mostrarMensaje.value = true
}

</script>

<template>
<section class="bg-[#FFEBC9] min-h-screen flex flex-col">

  <!-- barra d navegacion -->
  <BarraBusqueda />

  <!-- lo k va adentro -->
  <main class="flex-grow w-full flex flex-col items-center p-10 pb-32">

    <img
      src="/imagen cenote.jpg"
      alt="Publicación"
      class="w-[1600px] max-w-full h-[739px] rounded-[25px] object-cover"
    />

    <div class="relative -top-27 z-10">
        <actividadporhacer />
    </div>

    <div class="flex justify-center items-center gap-[39px] w-[377px] h-[68px] relative -top-10">

        <div class="text-[#604646]/30 text-[32px] font-semibold font-[Nunito_Sans]">
            Publicado por
        </div>

        <div class="text-[#00BF63] text-[32px] font-semibold font-[Nunito_Sans]">
            Usuario
        </div>
    </div>

    <div class="w-[1335px] text-center text-[#604646] text-[32px] font-[Asul] mt-10 p-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="flex gap-[39px] mt-10">
        <img
            src="/imagen piramide.jpg"
            class="w-[303px] h-[454px] rounded-[25px] shadow-md object-cover"
        />
        <img
            src="/imagen piramide.jpg"
            class="w-[303px] h-[454px] rounded-[25px] shadow-md object-cover"
        />
        <img
            src="/imagen piramide.jpg"
            class="w-[303px] h-[454px] rounded-[25px] shadow-md object-cover"
        />
        <img
            src="/imagen piramide.jpg"
            class="w-[303px] h-[454px] rounded-[25px] shadow-md object-cover"
        />
    </div>

    <div class="w-[1335px] text-center text-[#604646] text-[32px] font-[Asul] mt-10 p-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div class="w-[696px] h-[151px] bg-[#442F2F] rounded-[50px] shadow-md flex items-center justify-center mt-16">
        <div class="text-white text-[40px] font-extrabold font-[Nunito_Sans] text-center px-6">
            ¿Quiéres ganar puntos? ¡Deja una calificación y un comentario!
        </div>
    </div>

    <div class="w-[1325px] min-h-[463px] px-[101px] pt-[46px] pb-[30px] bg-[#FFDE59] rounded-[144px] overflow-hidden flex flex-col items-start gap-[23px]">

        <!-- fila superior -->
        <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-[19px]">
                <div class="w-[86px] h-[86px] bg-[#DADADA] rounded-full"></div>
                <div class="text-[#442F2F] text-[32px] font-bold font-[Nunito_Sans]">
                    Usuario
                </div>
            </div>

            <!-- estrellas -->
            <div class="flex items-center gap-[11px]">
                <button
                    v-for="n in 5"
                    :key="n"
                    @click="seleccionarEstrella(n)"
                    class="w-[53px] h-[53px] cursor-pointer"
                    type="button"
                >
                    <div
                        class="w-full h-full bg-[#442F2F]"
                        :style="n <= puntuacion
                        ? `mask-image: url('/Iconos/star-fill.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/star-fill.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;`
                        : `mask-image: url('/Iconos/star.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/star.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;`"
                    ></div>
                </button>
            </div>
        </div>

        <!-- textarea -->
        <textarea
            v-model="comentarios"
            placeholder="Escribe una opinión..."
            class="w-full min-h-[191px] bg-transparent text-black text-[24px] font-normal font-[Nunito_Sans] outline-none resize-none placeholder:text-black/70"
        ></textarea>

        <!-- botón enviar -->
        <button
            @click="enviarComentario"
            type="button"
            class="w-[190px] h-[58px] bg-[#FF7608] rounded-[50px] text-white text-[40px] font-extrabold font-[Nunito_Sans] text-center cursor-pointer hover:bg-[#e96b07] hover:scale-105 transition-all duration-200"
        >
            Enviar
        </button>
    </div>

    <div class="pt-16">
        <div class="w-[1226px] border-t border-[#604646]/50"></div>
    </div>

    <div class="w-full flex justify-center pt-16">
        <comentario />
    </div>

    <div class="w-full flex justify-center pt-16">
        <comentario />
    </div>

    <div class="w-full flex justify-center pt-16">
        <comentario />
    </div>

  </main>

    <!-- MENSAJE DE CONFIRMACION -->
    <div
        v-if="mostrarMensaje"
        @click="mostrarMensaje = false"
        class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >

        <div class="px-[131px] py-[77px] bg-[#00BF63] rounded-[144px] flex flex-col items-center justify-center">
            <div class="w-[641px] text-center text-white text-[40px] font-extrabold font-[Nunito_Sans]">
                ¡Gracias por calificar esta actividad! Ganaste 10 puntos
            </div>
        </div>
    </div>

  <!-- Footer -->
  <Footer />

</section>
</template>