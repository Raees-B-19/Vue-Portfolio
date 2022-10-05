<template>
  <section id="skills">
    <div v-if="resume">
      <div class="container">
        <div class="row mx-auto">
          <h2><span>Technical</span> Skills</h2>
          <div v-for="skills in resume" :key="skills">
            <div class="row">
              <div
                class="col-md-3"
                v-for="tech in skills.skillTechnical"
                :key="tech"
              >
                <i :class="tech.icon" class="icons"></i>
                <p>{{ tech.skill }}</p>
              </div>
            </div>
          </div>
          <div>
            <h2><span>Software</span> & Platforms</h2>
            <div class="row mx-auto justify-content-center">
              <div class="col-md-3">
                <a href="https://github.com/GarlicBuns19" target="_blank">
                  <i class="fa-brands fa-github icons git-icon"></i>
                </a>
                <p>Github</p>
              </div>
              <div class="col-md-3">
                <i class="fa-solid fa-n icons netlify-icon"></i>
                <p>Netlify</p>
              </div>
              <div class="col-md-3">
                <ion-icon name="logo-firebase" class="icons fire-icon"></ion-icon>
                <p>Firebase</p>
              </div>
              <div class="col-md-3">
                <i class="fa-brands fa-windows icons window-icon"></i>
                <p>Windows</p>
              </div>
              <div class="col-md-3">
                <i class="bx bxl-heroku icons"></i>
                <p>Heroku</p>
              </div>
              <div class="col-md-3">
                <i class="bx bxl-figma icons"></i>
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No skills to display</div>
  </section>
</template>
<script>
export default {
  computed: {
    resume() {
      return this.$store.state.resume;
    },
  },
};
</script>
<style scoped>
#skills {
  /* background: #1f1f1f; */
  background: rgba(31, 31, 31, .7);
  border: 1px solid #59cbe8;
  color: #e5e5e5;
  scroll-margin: 56px;
}
#skills h2 {
  padding: 30px 0;
}

#skills span {
  color: #59cbe8;
}
#skills p {
  font-size: 20px;
}
.icons {
  color: #59cbe8;
  margin: 10px;
  font-size: 80px;
  animation: hover 1.7s infinite alternate;
}
.git-icon {
  transition: 0.7s;
}
.git-icon:hover {
  color: #e5e5e5;
}
.netlify-icon {
  transition: 0.7s;
}
.netlify-icon:hover {
  color: #e5e5e5;
}
.window-icon{
  padding: 1px 0 0 0;
}
.fire-icon{
  font-size: 74px;
}
/* Hover effect */
@keyframes hover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-8px);
  }
}
</style>
