<script setup>
import { ref } from 'vue' 
import { useRouter } from 'vue-router'
import BarraBusqueda from '@/components/BarraBusqueda.vue'
import Footer from '@/components/Footer.vue'
import insignias from '@/components/insignias.vue'
import Confirmareliminacion from '@/components/Confirmareliminacion.vue'
import descuentos50 from '@/components/descuentos50.vue'
import editarperfil from '@/components/editarperfil.vue'
import CardResenaPerfil from '@/components/CardResenaPerfil.vue'


const modoEdicion = ref(false)

// sistema de mensaje de eliminar perfil
const mostrarConfirmacion = ref(false)
const router = useRouter()

const abrirConfirmacion = () => {
  mostrarConfirmacion.value = true
}

const cancelarEliminacion = () => {
  mostrarConfirmacion.value = false
}

const confirmarEliminacion = () => {
  router.push('/')
}
// termina sistema de mensaje

</script>

<template>
<section class="bg-[#FFEBC9] min-h-screen flex flex-col">

  <!-- barra d navegacion -->
  <BarraBusqueda />

  <!-- lo k va adentro -->
  <main class="flex-grow flex flex-col items-center p-10 gap-32 pb-32">

  <!-- PERFIL NORMAL -->
  <div
    v-if="!modoEdicion"
    class="bg-[#FFDE594C] rounded-[80px] p-10 w-[1200px] flex flex-col relative"
  >
    
    <!-- nombre + icono  -->
    <div class="flex items-center gap-6 mb-24">

        <div class="w-[120px] h-[120px] bg-[#FF7608]"
          style="mask-image: url('/Iconos/person-circle.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/person-circle.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>
        
        <div>
          <h1 class="text-5xl font-bold text-[#442F2F]">
            Nombre(s)
          </h1>
        </div>
      </div>

      <div class="h-[142px] w-[856px] relative left-[130px]">
        <div class="text-[#442F2F]/60 text-[24px] absolute top-[14px] left-[15px]">
          Descripción
        </div>
      </div>

      <insignias class="absolute top-19 right-19 transform scale-130" />

      <div class="mt-6 flex justify-center">
        <div class="w-[494px] h-[82px] text-[#FF7608] text-[48px] font-bold font-[Nunito_Sans] text-center break-words">
          Información de cuenta
        </div>
      </div>

      <div class="mt-10 flex flex-row gap-6">
        <!-- bloque nombre y apellidos -->
        <div class="flex flex-col gap-6 w-[623px] self-start">
          <!-- bloque nombre -->
          <div class="flex flex-col gap-6 w-full transform scale-75">
            <div class="text-[#442F2F] text-[40px] font-semibold">Nombre</div>
            <div class="relative w-full h-[114px] bg-[#FDF0D9] rounded-[65px] overflow-hidden">
                <div class="absolute left-[35px] top-[35px] text-[#442F2F]/60 text-[32px] font-normal">
                  Nombre
                </div>
            </div>
          </div>

          <!-- bloque apellidos -->
          <div class="flex flex-col gap-6 w-full transform scale-75">
            <div class="text-[#442F2F] text-[40px] font-semibold">Apellidos</div>
            <div class="relative w-full h-[114px] bg-[#FDF0D9] rounded-[65px] overflow-hidden">
                <div class="absolute left-[35px] top-[35px] text-[#442F2F]/60 text-[32px] font-normal">
                  Apellidos
                </div>
            </div>
          </div>
        </div>

        <!-- CORREO Y CONTRASEÑA SIMETRICO -->
        <div class="flex flex-col gap-6 w-[623px] self-end">
          <!-- CORREO -->
          <div class="flex flex-col gap-6 w-full transform scale-75">
            <div class="text-[#442F2F] text-[40px] font-semibold">Correo</div>
            <div class="relative w-full h-[114px] bg-[#FDF0D9] rounded-[65px] overflow-hidden">
                <div class="absolute left-[35px] top-[35px] text-[#442F2F]/60 text-[32px] font-normal">
                  Correo
                </div>
            </div>
          </div>

          <!-- CONTRASEÑA -->
          <div class="flex flex-col gap-6 w-full transform scale-75">
            <div class="text-[#442F2F] text-[40px] font-semibold">Contraseña</div>
            <div class="relative w-full h-[114px] bg-[#FDF0D9] rounded-[65px] overflow-hidden">
                <div class="absolute left-[35px] top-[35px] text-[#442F2F]/60 text-[32px] font-normal">
                  Contraseña
                </div>
            </div>
          </div>
        </div>
      </div>

      <!-- UBICACION -->
      <div class="mt-10 flex justify-center">
        <div class="flex flex-col gap-6 w-[623px] transform scale-75">
          <div class="text-[#442F2F] text-[40px] font-semibold text-center">Ubicación</div>
          <div class="relative w-full h-[114px] bg-[#FDF0D9] rounded-[65px] overflow-hidden">
              <div class="absolute left-[35px] top-[35px] text-[#442F2F]/60 text-[32px] font-normal">
                Ubicación
              </div>
              <div class="absolute right-[35px] top-[35px] w-[32px] h-[32px] bg-[#442F2F]/60"
                style="mask-image: url('/Iconos/search.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/search.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
              </div>
          </div>
        </div>
      </div>

      <div class="pt-24 flex justify-center gap-[92px]">

        <!-- BOTON EDITAR PERFIL -->
        <button
          @click="modoEdicion = true"
          class="px-[49px] py-[13px] bg-[#00BF63] rounded-[50px] shadow-md text-[#FFEBC9] text-[32px] font-bold font-[Nunito_Sans] hover:scale-105 transition"
        >
          Editar perfil
        </button>

        <!-- BOTON ELIMINAR PERFIL -->
        <button
          @click="abrirConfirmacion"
          class="px-[49px] py-[13px] bg-[#FF0000] rounded-[50px] shadow-md text-[#FFEBC9] text-[32px] font-bold font-[Nunito_Sans] hover:scale-105 transition"
        >
          Eliminar perfil
        </button>
      </div>
    </div>


  <!-- COMPONENTE EDITAR PERFIL -->
  <editarperfil
    v-else
    @cancelar="modoEdicion = false"
    @guardar="modoEdicion = false"
  />

    <!-- PARTE DE DESCUENTOS -->
    <div class="mt-32 flex flex-col gap-8 w-[1500px]">

      <div class="text-[#442F2F] text-[48px] font-bold font-[Nunito_Sans]">
        Tus descuentos
      </div>

      <div class="w-full border-t border-[#604646]/50"></div>

      <div class="grid grid-cols-3 gap-12 mt-4">

        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
        <descuentos50 texto="50% de descuento en una actividad" />
      </div>
    </div>

    <!-- PARTE DE PUBLICACIONES -->
    <div class="mt-32 flex flex-col gap-8 w-[1500px]">

      <div class="text-[#442F2F] text-[48px] font-bold font-[Nunito_Sans]">
        Post publicados
      </div>

      <div class="w-full border-t border-[#604646]/50"></div>

      <div class="grid grid-cols-3 gap-12 mt-4">

        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
        <CardResenaPerfil imagen="/imagen piramide.jpg" titulo="Lugar" ubicacion="Ciudad" puntuacion="5.0"
          contenido="Excelente lugar para visitar." />
      </div>
    </div>

  </main>

  <!-- FOOTER -->
  <Footer />

  <!-- SISTEMA PA CONFIRMAR ELIMINACION -->
  <Confirmareliminacion
  :visible="mostrarConfirmacion"
  @confirmar="confirmarEliminacion"
  @cancelar="cancelarEliminacion"
  />

</section>
</template>