<template>
  <h1>Resume</h1>
  <div v-if="resume">
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
  <div v-else>No skills to display</div>
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
