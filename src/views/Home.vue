<template>
  <div class="about">  
    <h1>Estem al home</h1>
    <h2> Recorrem un array/json </h2>
    <p v-for="g in valors"  :key="g.id">{{g.nom}}</p>
  </div>
</template>

<script>
export default {

setup() {

  let valors = [
    { id:1, nom:"Joan"},
    { id:2, nom:"Maria"},
    { id:3, nom:"Josep"},
    { id:4, nom:"Pere"},
    { id:5, nom:"Cristina"},
  ];
  return {
    valors
  }

}
}
</script>

<style>

</style>