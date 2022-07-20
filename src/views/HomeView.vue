<template>
  <header>
    <NavBar />
  </header>
  <main>
    <Home />
    <About />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Footer,
  },
};
</script>

