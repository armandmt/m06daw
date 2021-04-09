<template>
  <div class="home">
    <Login v-if="mostraLogin" :canvia="conmuta" />
    <Register v-else :canvia="conmuta" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { ref } from "vue";

export default {
  name: "Auth",
  components: {
    Login,
    Register,
  },
  setup() {
    let mostraLogin = ref(true);

    const conmuta = () => {
      // Passa de login a register i viceversa
      mostraLogin.value = !mostraLogin.value;
    };

    return {
      mostraLogin,
      conmuta,
    };
  },
};
</script>
