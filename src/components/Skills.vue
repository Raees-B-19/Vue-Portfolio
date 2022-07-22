<template>
  <section id="skills">
    <div v-if="resume">
      <div class="container">
        <div class="row">
          <div v-for="skills in resume" :key="skills">
            <h2>
              <span>{{ skills.headerSpan }}</span> {{ skills.header }}
            </h2>
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
                <i class="bi bi-github icons"></i>
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
}
#skills span {
  color: #59cbe8;
}
#skills p {
  font-size: 20px;
  color: #e5e5e5;
}
.icons {
  color: #59cbe8;
  margin: 10px;
  font-size: 80px;
}
</style>
