<template>
  <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
  <BackgroundComponent></BackgroundComponent>
  <div>
    <div id="slogan" class="text-center">
      <h1>Petshop</h1>
    </div>
  </div>
  <router-view />
</template>

<script>
import BackgroundComponent from "./components/BackgroundComponent.vue";
export default {
  components: {
    BackgroundComponent,
  }
}
</script>

<style>
#slogan {
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  background-color: #42b883;
  color: white;
  font-family: 'Righteous', cursive;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

