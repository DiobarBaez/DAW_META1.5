<template>
  <v-container>

    <div class="database-header">
      <h1><b>Base de Datos</b></h1>
    </div>

  </v-container>

  <v-container>

    <div class="table-container">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Cuerpo</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="post in posts"
              :key="post.id"
              @click="togglePopupMenu(post, $event)"
              :class="{ 'active': post === clickedRow, 'inactive': !popoverVisible}"
            >
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.body }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="popoverVisible" class="popup-menu" :style="popoverStyle">
        <button @click="editPost">Editar</button>
        <button @click="deletePost">Eliminar</button>
      </div>
    </div>

  </v-container>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue';

const posts = ref([]);
const popoverVisible = ref(false);
const selectedPost = ref(null);
const clickedRow = ref(null);
const popoverPosition = ref({ top: 0, left: 0 });

const popoverStyle = computed(() => {
  return {
    top: `${popoverPosition.value.top}px`,
    left: `${popoverPosition.value.left}px`,
  };
});

const togglePopupMenu = (post, event) => {
  selectedPost.value = post;
  popoverPosition.value = {
    top: event.clientY + window.scrollY,
    left: event.clientX + window.scrollX,
  };
  popoverVisible.value = !popoverVisible.value;
  clickedRow.value = post; // Establecer la fila actual como la fila clickeada
};

const editPost = () => {
  // Implementa aquí la lógica para editar el post seleccionado.
  console.log('Editar post:', selectedPost.value);
  popoverVisible.value = false;
};

const deletePost = () => {
  // Implementa aquí la lógica para eliminar el post seleccionado.
  console.log('Eliminar post:', selectedPost.value);
  popoverVisible.value = false;
};

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    posts.value = data;
    console.log(data);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
});
</script>

<style>
/* Estilos para la tabla */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.table th,
.table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ccc; /* Separación de las celdas */
  border-right: 1px solid #ccc; /* Bordes verticales */
}

.table th {
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
}

/* Efecto de resaltado al pasar el mouse sobre las filas */
.table tbody tr:hover {
  background-color: #e0e0e0;
}

/* Estilos para el menú emergente */
.popup-menu {
  position: absolute;
  background-color: #007bff;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1000; /* Asegura que el menú esté en la parte superior */
}

.popup-menu button {
  display: block;
  margin-bottom: 5px;
  padding: 5px 10px;
  text-align: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.popup-menu button:hover {
  background-color: #0056b3;
}

/* Estilo para la fila activa */
.active {
  background-color: #ffcc00; /* Cambia el color de fondo para la fila activa */
}

.inactive {
  background-color: #fff /* Cambia el color de fondo para la fila activa */
}

.database-header {
  text-align: center; /* Centrar el contenido horizontalmente */
  color: #333; /* Color del texto (gris oscuro) */
  padding: 20px; /* Espaciado interior */
  font-size: 28px; /* Tamaño de fuente */
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; /* Fuente */
  border-bottom: 2px solid #ddd; /* Borde inferior (gris claro) */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra */
  margin-bottom: 20px; /* Margen inferior para separación */
}

.table-container {
  overflow: auto;
  max-height: 600px; /* Ajusta la altura máxima según tus necesidades */
  border: 1px solid #ccc; /* Agrega un borde alrededor del contenedor */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra */
}


</style>
