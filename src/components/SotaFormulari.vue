<template>
  <h1>Us de l'store per obtenir valors desats en un altre component</h1>
  Sense ref: <b>{{ nom_del_store_sense_ref }}</b
  ><br />
  Amb ref <b>{{ nom_del_store_amb_ref }}</b
  ><br />
  computed <b>{{ nom_del_store_computed }}</b
  ><br />
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  name: "SotaFormulari",
  setup() {
    let store = useStore();
    let nom_del_store_sense_ref = store.state.nom;
    let nom_del_store_amb_ref = ref(store.state.nom);
    let nom_del_store_computed = computed(() => store.state.nom);

    return {
      nom_del_store_sense_ref,
      nom_del_store_amb_ref,
      nom_del_store_computed,
    };
  },
};
</script>

<style></style>
