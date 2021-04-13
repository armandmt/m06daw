<template>

  <Menu />
    <div >
      <slot />
    </div>
  <Peu/>
</template>

<script>
import Menu from "@/components/Menu";
import Peu from "@/components/Peu"

export default {
  name: "Layout",
  components: {
    Menu,Peu
  },
};
</script>

<style>
</style>