<template>
  <div>Això és la capçalera</div>
  <form>
    <input @change="canviaColor" type="text" name="colorin" v-model="colorin" />
  </form>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";

export default {
  name: "Header",
  setup() {
    let store = useStore(); // Importem el "magatzem"
    let colorin = ref("");

    const canviaColor = () => {
      console.log(colorin.value);
      store.commit("setColor", colorin.value);
      console.log(store.state.color);
    };

    return { colorin, canviaColor };
  },
};
</script>
