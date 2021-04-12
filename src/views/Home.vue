<template>
  <div class="home">
    <h1> ehhh  aqui estem ... </h1>
      <button @click="canvia" type="submit"> Anar al About  </button>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter} from "vue-router"

export default {
  name: 'Home',
  setup() {
        let route = useRouter();
        const canvia = () => {

            console.log("Anem cap al About");
            route.push({ name: "About"});


        }
        return {
            canvia
        }
    }
}
</script>
