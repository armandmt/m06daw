<template>
  <div class="home">
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

export default {
  name: "Home",
  components: {
    Formulari,
    SotaFormulari,
  },
};
</script>
