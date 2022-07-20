<template>
  <header>
    <NavBar />
  </header>
  <main>
    <Home />
    <About />
    <Projects />
    <Testimonails />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Projects from "../components/Project.vue";
import Testimonails from "../components/Testimonails.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Home,
    About,
    Projects,
    Testimonails,
    Footer,
  },
};
</script>

