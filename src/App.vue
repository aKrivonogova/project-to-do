<template>
  <div class="app" id="app">
    <homePage></homePage>
  </div>
</template>

<script>
import homePage from "./components/homePage";
export default {
  name: "App",
  components: {
    homePage,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
}
</style>
