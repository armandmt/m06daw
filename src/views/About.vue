<template>
  <h1>  About meeeeeee !!!!  </h1>
      <button @click="canvia" type="submit"> Anar a Home  </button>
</template>

<script>

import { useRouter} from "vue-router"

export default {
    name: "About",
    setup() {
        let route = useRouter();
        const canvia = () => {

            console.log("Anem cap al Home");
            route.push("/");


        }
        return {
            canvia
        }
    } 
}
</script>

<style>

</style>