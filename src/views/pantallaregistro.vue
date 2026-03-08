<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative min-h-screen w-full overflow-hidden bg-[#FFF1D9]">

    <!-- fondo / imagen izquierda -->
    <div
      class="absolute left-0 top-[21px] w-[1211px] h-[1003px] bg-cover bg-left"
      style="background-image: url('/prueba.png');q"
    ></div>

    <!-- panel derecho -->
    <div
      class="absolute top-0 right-0 w-[813px] h-screen bg-white rounded-l-[187px] overflow-hidden shadow-xl"
    >
      <div
        class="absolute left-1/2 -translate-x-1/2 top-[29px] w-[530px] flex flex-col items-center gap-[24px] scale-95"
      >
        <!-- encabezado -->
        <div class="w-[405px] flex flex-col items-center gap-[16px]">
          <img
            src="/destinariologo1.png"
            alt="Logo"
            class="w-[121px] h-[121px] object-contain"
          />

          <div class="w-full text-center text-[#FF7608] text-[36px] font-bold font-[Nunito_Sans]">
            Crea una cuenta
          </div>

          <div class="w-full text-center text-[#B8BEB8] text-[20px] font-normal font-[Nunito_Sans] leading-snug">
            ¡Regístrate y obtendrás guías turísticas para visitar en México durante el mundial de fútbol 2026!
          </div>
        </div>

        <!-- formulario -->
        <form class="w-full flex flex-col gap-[24px]">

          <div class="w-full flex flex-col gap-[11px]">
            <label class="text-black text-[16px] font-bold font-['Nunito_Sans']">
              Nombre/s
            </label>
            <input
              type="text"
              class="w-full h-[39px] px-[10px] rounded-[9px] border border-black/15 bg-transparent outline-none text-black"
            />
          </div>

          <div class="w-full flex flex-col gap-[11px]">
            <label class="text-black text-[16px] font-bold font-['Nunito_Sans']">
              Apellidos
            </label>
            <input
              type="text"
              class="w-full h-[39px] px-[10px] rounded-[9px] border border-black/15 bg-transparent outline-none text-black"
            />
          </div>

          <div class="w-full flex flex-col gap-[11px]">
            <label class="text-black text-[16px] font-bold font-['Nunito_Sans']">
              Correo electrónico
            </label>
            <input
              type="email"
              class="w-full h-[39px] px-[10px] rounded-[9px] border border-black/15 bg-transparent outline-none text-black"
            />
          </div>

          <div class="w-full flex flex-col gap-[11px]">
            <label class="text-black text-[16px] font-bold font-['Nunito_Sans']">
              Contraseña
            </label>
            <input
              type="password"
              class="w-full h-[39px] px-[10px] rounded-[9px] border border-black/15 bg-transparent outline-none text-black"
            />
          </div>

          <div class="w-full flex flex-col gap-[11px]">
            <label class="text-black text-[16px] font-bold font-['Nunito_Sans']">
              Ubicación
            </label>

            <div class="relative w-full">
              <input
                type="text"
                class="w-full h-[39px] px-[10px] pr-[40px] rounded-[9px] border border-black/15 bg-transparent outline-none text-black"
              />

              <div
                class="absolute right-[10px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-[#F6C7A2]"
                style="mask-image: url('/Iconos/search.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/search.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;"
              ></div>
            </div>
          </div>

          <div class="flex justify-center pt-2">
            <RouterLink to="/principal"
            class="w-[161px] h-[50px] bg-[#00BF63] shadow-md rounded-[50px] text-white text-[24px] font-semibold font-['Nunito_Sans'] hover:scale-105 transition cursor-pointer flex items-center justify-center"
            >
              Registrar
            </RouterLink>
          </div>
        </form>
      </div>
    </div>

  </section>
</template>