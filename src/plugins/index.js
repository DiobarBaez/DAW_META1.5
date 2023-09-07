/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 *
 * Este archivo se encarga de registrar los plugins utilizados en la aplicación.
 */

// Importaciones de plugins personalizados
import { loadFonts } from './webfontloader'; // Importa la función loadFonts desde webfontloader.js
import vuetify from './vuetify'; // Importa la configuración de Vuetify
import router from '../router/index'; // Importa la configuración de Vue Router

// Función para registrar plugins
export function registerPlugins (app) {
  // Carga las fuentes personalizadas utilizando la función loadFonts
  loadFonts();
  
  // Registra los plugins en la aplicación Vue
  app
    .use(vuetify) // Registra la configuración de Vuetify
    .use(router); // Registra la configuración de Vue Router
}
