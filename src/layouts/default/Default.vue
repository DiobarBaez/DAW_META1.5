<template>

  <v-app>
    <!-- Encapsula los componentes en un contenedor -->
    <v-container fluid >

      <v-container fluid>

        <v-row>
          <v-container >
            <DefaultBar/>
          </v-container>  
        </v-row>
        
      </v-container>

      <v-container fluid >
  
        <!-- Organiza los componentes en una fila -->
        <v-row>

          <!-- Coloca el componente DefaultBar en la primera columna -->
          <v-col cols="12" md="2">
            <v-container fluid class="container-border">
              <default-menu />
            </v-container>
          </v-col>

          <!-- Coloca el componente DefaultView en la tercera columna -->
          <v-col cols="12" md="10">
            <v-container fluid >
              <DefaultView />
            </v-container>
          </v-col>

        </v-row>
  
      </v-container>

    </v-container>
  
  </v-app>

</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import DefaultMenu from './menu.vue'
</script>

<style scoped>
.container-border {
  border: 1px solid black ; /* Añade un borde sólido de color gris claro */
  border-radius: 5px; /* Redondea las esquinas del contenedor */
  padding: -10px; /* Agrega espacio de relleno para separar el contenido del borde */
  margin-bottom: 20px; /* Agrega margen inferior para espaciar los contenedores */
}
</style>
