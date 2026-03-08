<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const showLogin = ref(false)
</script>

<template>
  <section class="relative min-h-screen w-full overflow-hidden">

    <!-- fondo -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/fotofondonueva.png');"
    ></div>

    <!-- bienvenida -->
    <div class="relative z-10 min-h-screen w-full flex items-center">
      <div class="flex items-end gap-[112px] justify-center w-full scale-119">

        <!-- bloque izquierdo -->
        <div class="w-[641px] h-[533px] flex flex-col items-start gap-[46px]">
          <img
            src="/destinariologo2.png"
            alt="Destinario"
            class="w-full h-[120px] object-contain"
          />

          <div class="w-[534px] text-[#604646] text-[40px] font-[Asul] leading-tight">
            Las mejores guías turísticas para visitar en México durante el mundial de futbol 2026
          </div>

          <button
            @click="showLogin = true"
            class="w-[172px] h-[50px] bg-[#00BF63] shadow-md rounded-[50px] text-white text-[20px] font-semibold font-['Nunito_Sans'] hover:scale-115 transition cursor-pointer scale-130"
            type="button"
          >
            Iniciar Sesión
          </button>
        </div>

        <!-- imagen derecha -->
        <img
          src="/destinariologo1.png"
          alt="Ilustración"
          class="w-[599px] h-[638px] object-contain"
        />
      </div>
    </div>

    <!-- panel login -->
    <Transition name="slide-panel">
      <div
        v-if="showLogin"
        class="absolute top-0 right-0 z-30 w-full md:w-[740px] h-screen bg-[#FFFDCE] md:rounded-l-[197px]"
      >
        <!-- cerrar -->
        <button
          @click="showLogin = false"
          type="button"
          class="absolute top-[41px] right-[51px] w-[48px] h-[48px] cursor-pointer group"
          title="Cerrar"
        >
          <div
            class="w-full h-full bg-[#604646] group-hover:scale-110 transition"
            style="mask-image: url('/Iconos/Arrow right.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/Arrow right.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"
          ></div>
        </button>

        <!-- contenido -->
        <div class="absolute top-[187px] left-1/2 -translate-x-1/2 w-[393px] flex flex-col items-center gap-[40px] scale-125">

          <div class="w-[405px] flex flex-col items-center gap-[18px]">
            <img
              src="/destinariologo1.png"
              alt="Logo"
              class="w-[121px] h-[121px] object-contain"
            />

            <div class="w-full text-center text-black text-[30px] font-[Nunito_Sans] font-extrabold">
              ¡Bienvenido/a de vuelta!
            </div>
          </div>

          <form class="w-full flex flex-col gap-[29px]">
            <div class="w-full flex flex-col gap-[11px]">
              <label class="text-black text-[16px] font-extrabold font-['Nunito_Sans']">
                Correo electrónico
              </label>
              <input
                type="email"
                class="w-full h-[39px] px-[10px] rounded-[9px] border border-black/15 bg-transparent outline-none text-black"
              />
            </div>

            <div class="w-full flex flex-col gap-[11px]">
              <label class="text-black text-[16px] font-extrabold font-['Nunito_Sans']">
                Contraseña
              </label>
              <input
                type="password"
                class="w-full h-[39px] px-[10px] rounded-[9px] border border-black/15 bg-transparent outline-none text-black"
              />
            </div>

            <RouterLink to="/principal" class="mt-2 flex justify-center">
              <button
                type="button"
                class="w-[172px] h-[50px] bg-[#604646] shadow-md rounded-[50px] text-white text-[20px] font-semibold font-['Nunito_Sans'] hover:scale-105 transition cursor-pointer"
              >
                Iniciar Sesión
              </button>
            </RouterLink>
          </form>
        </div>

        <!-- registro -->
        <div class="absolute left-1/2 -translate-x-1/2 top-[787px] w-[508px] text-center text-[#604646] text-[20px] font-bold font-[Nunito_Sans]">
          ¿No tienes una cuenta?
          <RouterLink to="/registro" class="underline">
            Regístrate aquí
          </RouterLink>
        </div>
      </div>
    </Transition>

  </section>
</template>

<style scoped>
.slide-panel-enter-active,
.slide-panel-leave-active {
  transition: all 0.35s ease;
}

.slide-panel-enter-from,
.slide-panel-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-panel-enter-to,
.slide-panel-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>