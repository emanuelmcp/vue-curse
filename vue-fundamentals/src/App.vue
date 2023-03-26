<template>
  <IndecisionComponentVue />
</template>

<script>
import IndecisionComponentVue from "./components/IndecisionComponent.vue";
export default {
  name: "App",
  components: { IndecisionComponentVue },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
