<template>
  <div class="home">
    <SobreFormulari/>
    <hr />
    <hr />
    <Formulari />
    <hr />
    <hr />
    <SotaFormulari />
  </div>
</template>

<script>
// @ is an alias to /src

import Formulari from "../components/Formulari";
import SotaFormulari from "../components/SotaFormulari";
import SobreFormulari from "../components/SobreFormulari";

export default {
  name: "Home",
  components: {
    Formulari,
    SotaFormulari,
    SobreFormulari
  },
};
</script>
