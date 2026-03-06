<template>
  <nav class="flex items-center justify-between sticky top-0 p-5  z-50 bg-[#FFEBC9] z-1000">
    <div class="flex items-center gap-2">
      <img src="/public/destinariologo2.png" alt="Logo" class="h-12" />
      <img src="/public/destinariologo1.png" alt="Logo" class="h-18" />
    </div>


    <div class="search-container w-[400px] relative">
      <input
        class="w-full rounded-full border-none bg-[#FDF0D9] p-3 text-center outline-none placeholder:text-[#604646]/50 shadow-sm font-[Nunito] text-xl text-[#604646]"
        type="text" placeholder="Buscar..." />

    </div>


    <div class="navbar-right p-5 flex items-center gap-6">
      <button class="icon-btn" title="Agregar">
        <div class="h-8 w-8 bg-[#FF7608]"
          style="mask-image: url('/Iconos/plus-circle.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/plus-circle.svg'); -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat;">
        </div>
      </button>

      <button class="icon-btn" title="Chats">
        <div class="h-8 w-8 bg-[#FF7608]"
          style="mask-image: url('/Iconos/chat.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/chat.svg'); -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat;">
        </div>
      </button>

      <button class="icon-btn" title="Perfil">
        <div class="h-8 w-8 bg-[#FF7608]"
          style="mask-image: url('/Iconos/person-circle.svg'); mask-repeat: no-repeat; mask-size: contain; -webkit-mask-image: url('/Iconos/person-circle.svg'); -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat;">
        </div>
      </button>
      
    </div>
  </nav>
</template>