<script setup>
import { RouterLink } from 'vue-router'
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import BotonBase from '@/components/BotonBase.vue'
import CardResena from '@/components/CardResena.vue'
import CardLugar from '@/components/CardLugar.vue'
import Footer from '@/components/Footer.vue'
</script>


<template>

    <section class="bg-[#FFEBC9]">
        <!--Barra de búsqueda-->
        <div>
            <BarraBusqueda />
            <main>
                <slot />
            </main>
        </div>

        <div class="items-center max-w-9xl mx-auto px-4 p-5">
            <!--Recompensas-->
            <div
                class="flex items-center justify-between bg-[#FF7608] text-white p-8 rounded-[2rem] font-[Nunito] h-[180px]">
                <div>
                    <p class="items-center justify-center text-xl">Hola, Usuario</p>
                </div>
                <div class="block">
                    <p class="items-center justify-center text-xl">Mis puntos</p>
                    <p class="items-center justify-center font-[Nunito] text-5xl font-bold">100</p>
                </div>
                <div>
                    <button class="text-[#604646] bg-[#FFEBC9] font-[Nunito] text-xl py-3 px-6 rounded-full text-xl transition-all 
                shadow-md active:scale-95 transition-transform duration-300 hover:scale-110">Ver recompensas</button>
                </div>
            </div>

            <br>

            <!--Mejores reseñas-->
            <div class="m-5 p-5">
                <h2 class="font-[Nunito] text-[#604646] text-2xl">Mejores reseñas</h2>
                <div class="flex items-center gap-5 mt-5 m-5 p-5">
                    <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
                        contenido="Excelente lugar para visitar." />
                    <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
                        contenido="Excelente lugar para visitar." />
                    <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
                        contenido="Excelente lugar para visitar." />
                    <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
                        contenido="Excelente lugar para visitar." />
                </div>
            </div>

            <!--Lugares-->
            <div class="m-5 p-5">
                <h2 class="font-[Nunito] text-[#604646] text-2xl">Explorar</h2>
                <div class="flex items-center gap-5 mt-5 m-5 p-5">
                    <CardLugar imagen="/imagen cenote.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0" />
                    <CardLugar imagen="/imagen cenote.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0" />
                    <CardLugar imagen="/imagen cenote.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0" />
                    <CardLugar imagen="/imagen cenote.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0" />
                    <CardLugar imagen="/imagen cenote.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0" />
                    <CardLugar imagen="/imagen cenote.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0" />
                </div>
            </div>

        </div>
        <br>
        <Footer />
    </section>
</template>