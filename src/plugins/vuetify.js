/**
 * plugins/vuetify.js
 *
 * Este archivo es una configuración personalizada para Vuetify, un framework de UI para Vue.js.
 * Se utiliza para definir los estilos, íconos y tema de la aplicación.
 */

// Importaciones de estilos
import '@mdi/font/css/materialdesignicons.css'; // Importa los íconos de Material Design
import 'vuetify/styles'; // Importa los estilos de Vuetify

// Importación de composable
import { createVuetify } from 'vuetify'; // Importa la función createVuetify desde el módulo vuetify

// Configuración de Vuetify
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',    // Color primario personalizado
          secondary: '#5CBBF6',  // Color secundario personalizado
        },
      },
    },
  },
});
