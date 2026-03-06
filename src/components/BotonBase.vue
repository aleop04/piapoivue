<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'button'
  },
  customClass: {
    type: String,
    default: 'bg-[#00c86e] hover:bg-green-600 text-white'
  }

})

const emit = defineEmits(['click'])


</script>


<template>
  <button 
    @click="emit('click')"
    :class="[
      'text-white font-[Nunito] text-xl py-3 px-10 rounded-full text-xl transition-all shadow-md active:scale-95',
      customClass
    ]">
    {{ text }}
  </button>
</template>