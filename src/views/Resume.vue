<template>
  <section id="resume">
    <h1>Resume</h1>
    <div v-if="resume">
      <div class="container">
        <div v-for="skills in resume" :key="skills">
          <div class="row">
            <div
              class="col-md-6 experience-container"
              v-for="workExperience in skills.experience"
              :key="workExperience"
            >
              <h2>
                {{ workExperience.start }}<span>{{ workExperience.end }}</span>
              </h2>
              <h3>
                <span id="life-choices">{{ workExperience.main }}</span>
                {{ workExperience.name }}
              </h3>
              <ul>
                <li>
                  <h4>{{ workExperience.duties }}</h4>
                </li>
                <li>
                  <h4>{{ workExperience.duties1 }}</h4>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div v-for="soft in skills.softSkills" :key="soft">
              <h2>{{ soft.name }} <span>{{soft.name1}}</span></h2>
              <div class="col-md-12">
                <h4>{{ soft.skill }}</h4>
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
#resume {
  background: #1f1f1f;
  color: #e5e5e5;
  padding: 30px 0;
  border: 10px solid #59cbe8;
  scroll-margin: 50px;
}
#resume h1 {
  padding: 10px 0;
}
#resume h2 {
  text-decoration: underline;
  padding: 10px 0;
}
#resume span {
  color: #59cbe8;
}
.icons {
  color: #59cbe8;
  margin: 10px;
  font-size: 80px;
}
.experience-container {
  border-left: 3px solid #59cbe8;
  padding: 0 0 0 3% !important;
  position: relative !important;
  text-align: left;
  margin: 10px 0;
}
.experience-container span {
  color: #59cbe8;
}
.experience-container #life-choices {
  color: #66ff00;
}
.experience-container ul li {
  list-style: none;
}
.experience-container::before {
  position: absolute;
  left: -11px;
  top: 0;
  display: block;
  content: "";
  width: 20px;
  height: 20px;
  border: 3px solid #59cbe8;
  border-radius: 50%;
  background: #1f1f1f !important;
}
</style>
