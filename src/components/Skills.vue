<template>
  <section id="skills">
    <div v-if="resume">
      <div class="container">
        <div class="row">
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
            <div class="row">
              <div class="col-md-4">
                <a href="https://github.com/GarlicBuns19" target="_blank">
                  <i class="bi bi-github icons git-icon"></i>
                </a>
                <p>Github</p>
              </div>
              <div class="col-md-4">
                <ion-icon name="logo-firebase" class="icons"></ion-icon>
                <p>Firbase</p>
              </div>
              <div class="col-md-4">
                <i class="fa-brands fa-windows icons"></i>
                <p>Windows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No skills to display</div>
    <!-- <div class="container">
      <div class="row">
        <div class="row">
          <div class="col-md-3">
            <i class="fa-brands fa-html5 icons"></i>
          </div>
          <div class="col-md-3">
            <i class="fa-brands fa-css3-alt icons"></i>
          </div>
          <div class="col-md-3">
            <i class="fa-brands fa-bootstrap icons"></i>
          </div>
          <div class="col-md-3">
            <i class="fa-brands fa-js icons"></i>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-3">
            <i class="fa-brands fa-vuejs icons"></i>
          </div>
          <div class="col-md-3">
            <i class="fa fa-database icons" aria-hidden="true"></i>
          </div>
          <div class="col-md-3"></div>
        </div>
        <div class="row">
          <h2>Software and Platforms</h2>
          <div class="col-md-4">
            <i class="bi bi-github icons"></i>
          </div>
          <div class="col-md-4">
            <ion-icon name="logo-firebase" class="icons"></ion-icon>
          </div>
          <div class="col-md-4">
            <i class="fa-brands fa-windows icons"></i>
          </div>
        </div>
      </div>
    </div> -->
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
  background: #1f1f1f;
  border: 10px solid #59cbe8;
  color: #e5e5e5;
  scroll-margin: 50px;
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
}
.git-icon {
  transition: 0.7s;
}
.git-icon:hover {
  color: #e5e5e5;
}
</style>
