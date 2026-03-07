<script setup>
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import Footer from '@/components/Footer.vue'
import recompensains from '@/components/recompensains.vue'
import recompensades from '@/components/recompensades.vue'


</script>

<template>
<section class="bg-[#FFEBC9] min-h-screen flex flex-col">

  <!-- barra d navegacion -->
  <BarraBusqueda />

  <!-- lo k va adentro -->
  <main class="flex-grow w-full flex flex-col items-center p-10 pb-32">

    <div class="w-[1301px] mx-auto px-[101px] py-[10px] bg-[#FF7608] rounded-[156px] flex flex-col gap-[10px]">
        <div class="w-full flex items-center gap-[70px]">

            <!-- saludo -->
            <div
                class="w-[804px] text-white text-[64px]
                    font-extrabold font-[Nunito]"
            >
                ¡Hola de vuelta, Usuario!
            </div>

            <!-- puntos -->
            <div class="w-[225px] flex flex-col items-center gap-[9px] p-9">

                <div class="w-full text-center text-white text-[24px] font-[Nunito_Sans]">
                    Mis puntos
                </div>

                <div class="w-full text-white text-[90px] font-[Orelega_One]">
                    100
                </div>
            </div>
        </div>
    </div>

    <div class="w-[829px] h-[89px] mx-auto text-center text-[#604646] text-[50px] font-extrabold font-[Nunito_Sans] p-25">
        ¿En qué quieres gastar tus puntos hoy?
    </div>

    <div class="mt-20 flex flex-col items-center gap-10 p-30">
        <recompensains class="scale-70" />
        <recompensains class="scale-70" />
        <recompensains class="scale-70" />
        <recompensains class="scale-70" />
        <recompensains class="scale-70" />
        <recompensains class="scale-70" />
        <recompensains class="scale-70" />
        <recompensains class="scale-70" />
        <recompensades class="scale-70" />
        <recompensades class="scale-70" />
        <recompensades class="scale-70" />
        <recompensades class="scale-70" />
    </div>

  </main>

  <!-- Footer -->
  <Footer />

</section>
</template>