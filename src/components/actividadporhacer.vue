<script setup>
</script>

<template>
  <div class="bg-[#FDF0D9] shadow-md rounded-[25px] px-[78px] py-[24px] flex flex-col justify-center items-start gap-[40px]">

    <!-- fila superior -->
    <div class="flex items-center gap-[40px]">
      <div class="text-[#442F2F] text-[55px] font-normal font-['Nunito_Sans'] break-words">
        Actividad por hacer
      </div>

      <div class="flex items-center gap-[8px] h-[25px]">
        <div
          class="w-[26px] h-[26px] bg-[#FF7608]"
          style="mask-image: url('/Iconos/geo-alt.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/geo-alt.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <div class="opacity-50 text-[#442F2F] text-[24px] font-normal font-['Nunito_Sans'] break-words">
          Lugar
        </div>
      </div>
    </div>

    <!-- fila inferior -->
    <div class="w-full flex justify-center items-center gap-[105px] px-[83px]">

      <div class="flex items-center gap-[8px]">
        <div
          class="w-[24px] h-[24px] bg-[#FF7608] opacity-50"
          style="mask-image: url('/Iconos/calendar-event.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/Calendar.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <div class="opacity-50 text-[#442F2F] text-[20px] font-normal font-['Nunito_Sans'] break-words">
          1 Día
        </div>
      </div>

      <div class="flex items-center gap-[6px]">
        <div
          class="w-[22px] h-[22px] bg-[#FF7608] opacity-50"
          style="mask-image: url('/Iconos/clock.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/Clock.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <div class="opacity-50 text-[#442F2F] text-[20px] font-normal font-['Nunito_Sans'] break-words">
          Horario
        </div>
      </div>

      <div class="flex items-center gap-[13px]">
        <div
          class="w-[24px] h-[24px] bg-[#FF7608] opacity-50"
          style="mask-image: url('/Iconos/star.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/star.svg'); -webkit-mask-repeat: no-repeat; -webkit-mask-size: contain;">
        </div>

        <div class="opacity-50 text-[#442F2F] text-[20px] font-normal font-['Nunito_Sans'] break-words">
          5.5
        </div>
      </div>

    </div>
  </div>
</template>