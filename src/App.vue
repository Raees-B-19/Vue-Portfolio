<template>
  <header>
    <NavBar />
  </header>
  <main>
    <Home />
    <About />
    <Resume />
    <Projects />
    <Skills />
    <Testimonails />
    <Contact />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
<script>
// import HomeView from "./views/HomeView.vue";
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Resume from "./views/Resume.vue";
import Projects from "./views/Project.vue";
import Skills from "./views/Skills.vue";
import Testimonails from "./views/Testimonails.vue";
import Contact from "./views/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Resume,
    Projects,
    Skills,
    Testimonails,
    Contact,
    Footer,
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
  width: 7px;
  background-color: #59cbe8;
  /* border-radius: 10px; */
}
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey; */
  border-radius: 10px;
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: #e5e5e5;
  /* border-radius: 10px; */
}
h1{
  color: #59cbe8;
}
/* Background
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
} */
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

<script>



</script>

