<!--

    components/AppBar.vue

    Cabecera del programa con el nombre del software.

-->

<template>
  <!-- Componente de la barra de navegación -->
  <v-app-bar flat color="primary"> <!-- Añade el color de fondo y elevación -->
    <!-- Icono en la barra de navegación -->
    <v-icon class="mr-2" icon="mdi-circle-slice-4" /> <!-- Agrega margen derecho -->
    <v-app-bar-title>
      <!-- Texto en la barra de navegación -->
      PVVC APP
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
// No es necesario realizar cambios en el bloque de script setup ya que el componente es muy simple.
</script>
