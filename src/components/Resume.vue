<template>
  <section id="resume">
    <h1>Resume</h1>
  </section>
  <!-- <div v-if="skills">
    <div v-for="skills in resume" :key="skills">
      {{ skills.name }}
        <ul>
          <li v-for="soft in skills.skillTechnical" :key="soft">{{ soft.skill }}</li>
        </ul>
        <ul>
          <li v-for="tech in skills.technical" :key="tech">{{ tech.skill }}</li>
          <li v-for="tech in skills.technical" :key="tech">{{ tech.icon }}</li>
        </ul>
    </div>
  </div>
  <div v-else>No skills to display</div> -->
</template>
<script>
// export default {
//   computed: {
//     skills() {
//       return this.$store.state.resume;
//     },
//   },
// };
</script>
<style scoped>
#resume {
  background: #1f1f1f;
}
.icons {
  color: #59cbe8;
  margin: 10px;
  font-size: 80px;
}
</style>
