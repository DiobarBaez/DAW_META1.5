<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        :src="url"
        cover
      ></v-img>
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
          @click = "cambiarImagen"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</template>

<script setup>//
    import {ref} from 'vue';
    const show = ref(false);
    const urlImagen = ref("https:/random.imagecdn.app/300/400");
    const url = ref(urlImagen.value);
    // si un atributo de un componente le antecede : quiero decir que hace referencia al valor de una variable.
    // sin un atributo le antepone un @ son eventos, y estos pueden apuntar a variables y actuar cuando estas cambian su valor
    // funcion que nos permite enviar requerimientos https con fetch
    // .value para acceder al valor de la variable en vez de a su direccion en memoria
    //show.value =  true;
    async function cambiarImagen(){
      console.log("Cambiando imagen");
      const response = await fetch(urlImagen.value, {
        method: "GET", 
        Headers:{
          "Content-type":"application/json"
        }
      });
      console.log(response.url);
      url.value = response.url;

    }
</script>