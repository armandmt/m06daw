<template>
  <Header />
  <hr />
  <div class="home">
    Estem al Home
    {{ colorum }}
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import Header from "../components/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
  setup() {
    let store = useStore();
    let colorum = computed(() => {
      console.log(store.state.color);
      return store.state.color;
    });
    0
    return { colorum };
  },
};
</script>
