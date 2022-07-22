<template>
  <section id="resume">
    <h1>Resume</h1>
    <div v-if="resume">
      <div v-for="skills in resume" :key="skills">
        <div class="col-md-6" v-for="soft in skills.softSkills" :key="soft">
          <p>{{ soft.skill }}</p>
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
#resume {
  background: #1f1f1f;
  padding: 30px 0;
  border: 10px solid #59cbe8;
  scroll-margin: 50px;

}
#resume h1{
  padding: 10px 0;
}
.icons {
  color: #59cbe8;
  margin: 10px;
  font-size: 80px;
}
</style>
