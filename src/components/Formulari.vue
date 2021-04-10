<template>
  <form @submit.prevent="envia">
    <input type="text" v-model="nom" /><br />
    <input type="text" v-model="cognom" /><br />
    <input type="text" v-model="edat" /><br />
    <input type="submit" />
  </form>
  <p>
    Nom (ref) : {{ nom }}<br />
    Cognom (semse ref) {{ cognom }}<br />
    Dies viscuts (computed) {{ diesviscuts }}<br />
    Dies viscuts (ref) {{ diesviscutsref }}<br />
    Anys viscuts (ref) {{ anysviscutsref }}<br />
  </p>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  name: "Formulari",
  setup() {

    // ref aporta reactivitat amb valor simples
    // computed quan depen d'altre variables o mètodes
    let store = useStore();
    let nom = ref(""); // Amb ref
    let cognom = ""; // Sense ref
    let edat = ref(0);
    let diesviscutsref = ref(edat.value * 365); // no funciona
    let anysviscutsref = ref(edat.value); // No funciona
    let diesviscuts = computed(() => {
      // Sí funciona
      return edat.value * 365;
    });

    const envia = () => {
        // DESEM A L'STORE
      store.commit("setNom", nom.value);
      store.commit("setEdat", edat.value);
      console.log(nom.value + "--" + cognom); // cOGNOM no es visualitzarà

      // Envia a l'store
    };

    return {
      nom,
      cognom,
      envia,
      edat,
      diesviscuts,
      diesviscutsref,
      anysviscutsref,
    };
  },
};
</script>

<style></style>
