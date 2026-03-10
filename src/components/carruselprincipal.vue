<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const fotos = [
  '/i1.png',
  '/i2.png',
  '/i3.png',
  '/i4.png',
  '/i5.png',
  '/i6.png'
]

const fotoActual = ref(0)
let intervalo = null

const siguienteFoto = () => {
  fotoActual.value = (fotoActual.value + 1) % fotos.length
}

const fotoAnterior = () => {
  fotoActual.value = (fotoActual.value - 1 + fotos.length) % fotos.length
}

onMounted(() => {
  intervalo = setInterval(() => {
    siguienteFoto()
  }, 5000)
})

onBeforeUnmount(() => {
  clearInterval(intervalo)
})
</script>

<template>
  <div class="w-full max-w-[1217px] mx-auto relative">
    <img
      :src="fotos[fotoActual]"
      alt="Foto turística"
      class="w-full h-[220px] sm:h-[300px] lg:h-[412px] object-cover rounded-[35px]"
    />

    <!-- botón izquierda -->
    <button
      @click="fotoAnterior"
      class="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2
             w-10 h-10 sm:w-12 sm:h-12
             rounded-full shadow-md flex items-center justify-center transition"
      type="button"
    >
      <img src="/Iconos/Arrow left-circle.svg" alt="Anterior" class="w-5 h-5"/>
    </button>

    <!-- botón derecha -->
    <button
      @click="siguienteFoto"
      class="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2
             w-10 h-10 sm:w-12 sm:h-12
             rounded-full shadow-md flex items-center justify-center transition"
      type="button"
    >
      <img src="/Iconos/Arrow right-circle.svg" alt="Siguiente" class="w-5 h-5"/>
    </button>

    <!-- indicadores -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(foto, index) in fotos"
        :key="index"
        @click="fotoActual = index"
        class="w-3 h-3 rounded-full transition"
        :class="fotoActual === index ? 'bg-white' : 'bg-white/50'"
      ></button>
    </div>
  </div>
</template>
