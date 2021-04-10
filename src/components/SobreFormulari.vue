<template>
  <h1> Exemple amb watch </h1>
  <p>Actual {{ actualref }}</p>
  <p> Anterior {{ anteriorref }}</p>
</template>

<script>
import { watch,computed,ref } from "vue"
import { useStore } from "vuex";


export default {
    name: "SobreFormulari",
    setup() {

        let store = useStore();
        let actualref = ref(0);
        let anteriorref = ref(0);

        let edat = computed(() => store.state.edat)
        // watch vigial un valor ( o molts) i executa el mètode quan canvia
        watch(edat, (actual,anterior) => {

            console.log("Actual: " +actual);
            actualref.value=actual;
            console.log("Anterior: " +anterior);
            anteriorref.value = anterior;

        })
        return {

            actualref,
            anteriorref

        }
    }
}
</script>

<style>

</style>