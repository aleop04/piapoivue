<script setup>
import { RouterLink } from 'vue-router'
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import BotonBase from '@/components/BotonBase.vue'
import CardResena from '@/components/CardResena.vue'
import CardLugar from '@/components/CardLugar.vue'
import Footer from '@/components/Footer.vue'
import carruselprincipal from '@/components/carruselprincipal.vue'

</script>


<template>

    <section class="bg-[#FFEBC9] min-h-screen flex flex-col">
        <!--Barra de búsqueda-->
        <BarraBusqueda />

        <!-- Contenido principal -->
    <main class="flex-grow">
      <!-- carrusel -->
      <div class="w-full flex justify-center pt-18 mt-10 px-4 scale-120">
        <carruselprincipal />
      </div>

      <div class="max-w-9xl mx-auto pt-19 px-4 py-5">
        <!-- Mejores reseñas -->
        <div class="m-5 p-5">
          <h2 class="font-[Nunito] text-[#604646] text-2xl">Mejores reseñas</h2>
          <div class="flex items-center gap-5 mt-5 m-5 p-5">
            <CardResena
              imagen="/imagen piramide.jpg"
              titulo="Lugar"
              ubicacion="Ciudad"
              puntuacion="5.0"
              contenido="Excelente lugar para visitar."
            />
            <CardResena
              imagen="/imagen piramide.jpg"
              titulo="Lugar"
              ubicacion="Ciudad"
              puntuacion="5.0"
              contenido="Excelente lugar para visitar."
            />
            <CardResena
              imagen="/imagen piramide.jpg"
              titulo="Lugar"
              ubicacion="Ciudad"
              puntuacion="5.0"
              contenido="Excelente lugar para visitar."
            />
            <CardResena
              imagen="/imagen piramide.jpg"
              titulo="Lugar"
              ubicacion="Ciudad"
              puntuacion="5.0"
              contenido="Excelente lugar para visitar."
            />
          </div>
        </div>

        <!-- Lugares -->
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
    </main>

    <Footer />
  </section>
</template>