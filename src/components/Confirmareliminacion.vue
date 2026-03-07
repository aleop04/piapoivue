<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['confirmar', 'cancelar'])
</script>

<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
  >
    <div class="w-[843px] h-[361px] px-[131px] py-[77px] bg-[#00BF63] rounded-[144px] overflow-hidden flex flex-col justify-center items-center gap-[10px]">
      
      <div class="w-[641px] h-[188px] text-center text-white text-[40px] font-extrabold font-[Nunito_Sans] leading-tight">
        ¿Estás seguro/a de que quieres eliminar tu perfil? Esta acción no se puede revertir.
      </div>

      <div class="flex items-center gap-[52px]">
        <button
          @click="emit('confirmar')"
          class="px-[49px] py-[13px] bg-[#FF7608] shadow-md rounded-[50px] text-[#FFEBC9] text-[32px] font-bold font-[Nunito_Sans] hover:scale-105 transition"
        >
          Confirmar
        </button>

        <button
          @click="emit('cancelar')"
          class="px-[49px] py-[13px] bg-[#FF0000] shadow-md rounded-[50px] text-[#FFEBC9] text-[32px] font-bold font-[Nunito_Sans] hover:scale-105 transition"
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
</template>