<script setup>
import { RouterLink } from 'vue-router' 
import BotonBase from '@/components/BotonBase.vue'
</script>

<template>

  <div>
    <!--lado izquierdo-->
    <div>
      <img src="/public/destinariologo2.png" alt="Logo" class="w-25 h-25" />
      <p>Regístrate y obtendrás guías turísticas para visitar en México durante el mundial de futbol 2026.</p>
    </div>


    <!--lado derecho-->
    <div>
      <h1>Crear cuenta</h1>
      <form>

        <label>Nombre</label>
        <input type="text" placeholder="Nombre"></input>

        <label>Apellido</label>
        <input type="text" placeholder="Apellido"></input>

        <label>Correo electrónico</label>
        <input type="text" placeholder="Correo"></input>

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña"></input>

        <label>Ubicación</label>
        <input type="text" placeholder="Ubicación"></input>


    

   <BaseButton type="submit" text="Entrar" @click="showLogin = true" />


      </form>
    </div>
  </div>
</template>