<template>
  
  <h1> Epp, estem al Joc !!!!  </h1>
  <h2> {{ $route.params.nom }} </h2>
</template>

<script>
import { useRoute } from 'vue-router'

export default {

    setup() {
        // Aquí això dona error
        // console.log($route.params.nom);
        const ruta = useRoute();
        console.log (ruta.params.nom);


    }
    

}
</script>

<style>

</style>