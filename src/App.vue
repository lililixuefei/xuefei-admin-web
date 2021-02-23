<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  mounted() {
    console.log(process.env.VUE_APP_BASE_API);
  },
};
</script>

<style>
</style>
