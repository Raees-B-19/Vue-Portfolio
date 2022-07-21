<template>
  <h1>Resume</h1>
  <!-- <div v-if="resume">
    <div v-for="skills in resume" :key="skills">
      {{ skills.name }}
        <ul>
          <li v-for="soft in skills.softSkills" :key="soft">{{ soft.skill }}</li>
        </ul>
        <ul>
          <li v-for="tech in skills.technical" :key="tech">{{ tech.skill }}</li>
          <li v-for="tech in skills.technical" :key="tech">{{ tech.icon }}</li>
        </ul>
    </div>
  </div>
  <div v-else>No skills to display</div> -->
  <div class="container">
    <div class="row">
      <div class="row">
        <h2>Technical Skills</h2>
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
        <div class="col-md-3">
          <i class="fa-brands fa-vuejs icons"></i>
        </div>
        <div class="col-md-3">
          <i class="fa fa-database icons" aria-hidden="true"></i>
        </div>
      </div>
      <div class="row">
        <h2>Software and Platforms</h2>
        <div class="col-md-3">
          <i class="bi bi-github icons"></i>
        </div>
        <div class="col-md-3">
          <ion-icon name="logo-firebase" class="icons"></ion-icon>
        </div>
        <div class="col-md-3">
          <i class="fa-brands fa-windows icons"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// export default {
//   computed: {
//     resume() {
//       return this.$store.state.resume;
//     },
//   },
// };
</script>
<style scoped>
.icons{
    padding: 20px 0;
    font-size: 5em;
    border-radius: ;
}
</style>
