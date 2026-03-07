<script setup>

defineProps({
  texto: {
    type: String,
    required: true
  }
})

</script>

<template>

<div class="flex items-start">

  <img
    src="/destinariologo1.png"
    class="w-[83px] h-[83px] rounded-[47px]"
  />

  <div class="w-[279px] h-[77px] text-[#FF7608] text-[32px] font-bold font-[Nunito_Sans] ml-4">
    {{ texto }}
  </div>

</div>

</template>