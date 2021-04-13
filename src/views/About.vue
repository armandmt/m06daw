<template>
  <Layout>

    <h1> estem a l'about </h1>
    <h2> ia ia o </h2>
    <router-link :to="{ name: 'Home' }">Tornem a caseta </router-link>
  </Layout>
</template>

<script>
import Layout from "../layouts/Layout"
export default {
name: "About",
components: {
    Layout,
}

}
</script>

<style>

</style>