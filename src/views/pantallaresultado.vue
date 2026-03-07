<script setup>
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import Footer from '@/components/Footer.vue'
import CardResena from '@/components/CardResena.vue'
</script>

<template>
<section class="bg-[#FFEBC9] min-h-screen flex flex-col">

  <!-- barra d navegacion -->
  <BarraBusqueda />

  <!-- lo k va adentro -->
  <main class="flex-grow w-full p-10 flex flex-col gap-12 pb-32">

  <div class="text-[#442F2F] text-[36px] font-bold font-[Nunito_Sans]">
    Mejores resultados para "Lugar"
  </div>

    <div class="grid grid-cols-5 gap-10">

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />

        <CardResena imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
        contenido="Excelente lugar para visitar." />
    </div>

</main>

  <!-- Footer -->
  <Footer />

</section>
</template>