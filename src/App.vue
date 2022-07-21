<template>
  <HomeView />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>
<script>
import HomeView from "./views/HomeView.vue";

export default {
  components: {
    HomeView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 13px;
  background-color: #E5E5E5;
}
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey; */
  border-radius: 30px;
}
::-webkit-scrollbar-thumb {
  background: #1f1f1f;
  border-radius: 10px;
}
/* Background */
:root{
  --background-color: white;
  --text-color: black;
}
.dark-theme{
  --background-color: #1f1f1f;
  --text-color: white;
}
h1{
  color:var(--text-color) !important;
}
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
