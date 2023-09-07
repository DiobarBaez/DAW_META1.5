/**
 * plugins/webfontloader.js
 *
 * Documentación de WebFontLoader: https://github.com/typekit/webfontloader
 *
 * Este archivo define una función para cargar fuentes personalizadas en la aplicación.
 */

// Importa la biblioteca WebFontLoader de forma dinámica (async/await)
export async function loadFonts() {
  // Utiliza la importación dinámica para cargar la biblioteca WebFontLoader cuando sea necesario
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */ 'webfontloader');

  // Carga las fuentes personalizadas utilizando WebFontLoader
  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'], // Especifica las familias de fuentes a cargar desde Google Fonts
    },
  });
}