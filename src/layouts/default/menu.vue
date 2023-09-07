<template>
  <v-app>
    <v-navigation-drawer floating permanent app>
      <v-list dense nav>
        <v-list-item
          v-for="route in routes"
          :key="route.name"
          @click="navigateTo(route.name)"
          :prepend-icon="route.icon"
          :title="route.title"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>  <!--calc(100vh - 64px)-->
    <v-main style="min-height: 100vh;">
      <!-- Contenido principal de tu aplicación aquí -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>

    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import { useRouter } from 'vue-router';

    // Variables reactivas
    const routes = ref([
      { name: 'Home', icon: 'mdi-view-dashboard', title: 'Home' },
      { name: 'Imagen', icon: 'mdi-view-dashboard', title: 'Imagen' },
      { name: 'Table', icon: 'mdi-view-dashboard', title: 'Table' },
    ]);

    // Obtenemos la instancia de $router
    const router = useRouter();

    // Método para navegar a una ruta cuando se hace clic en un elemento de la lista
    const navigateTo = (routeName) => {
      router.push({ name: routeName });
    };

    // Ciclos de vida
    onMounted(() => {
      // Código a ejecutar cuando se monta el componente
    });

    onBeforeUnmount(() => {
      // Código a ejecutar antes de desmontar el componente
    });

    /* FORMA EN LA VERSION ANTERIOR

      export default {
        name: "Menu",
        data() {
          return {
            // Definición de rutas para la barra de navegación
            routes: [
              { name: 'Home', icon: 'mdi-view-dashboard', title: 'Home' },
              { name: 'Imagen', icon: 'mdi-view-dashboard', title: 'Imagen' },
            ],
          };
        },
        methods: {
          // Método para navegar a una ruta cuando se hace clic en un elemento de la lista
          navigateTo(routeName) {
            this.$router.push({ name: routeName });
          },
        },
      };

    */
</script>

