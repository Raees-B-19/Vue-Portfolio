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
import NavBar from "../components/NavBar.vue";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Resume from "../components/Resume.vue";
import Projects from "../components/Project.vue";
import Skills from "../components/Skills.vue";
import Testimonails from "../components/Testimonails.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

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
