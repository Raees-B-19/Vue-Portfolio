<template>
  <section id="resume">
    <h2>Resume</h2>
    <div v-if="resume">
      <div class="container">
        <div v-for="skills in resume" :key="skills" id="resumeDiv">
          <div class="row">
            <div
              class="col-md-6 experience-container"
              v-for="workExperience in skills.experience"
              :key="workExperience"
            >
              <h3>
                {{ workExperience.start }}<span>{{ workExperience.end }}</span>
              </h3>
              <p id="resume-exp">
                <span id="studio" v-if="workExperience.studio">{{
                  workExperience.studio
                }}</span>
                <span id="life-choices">{{ workExperience.main }}</span>
                {{ workExperience.name }}
              </p>
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
          <!-- <div class="row">
            <div v-for="soft in skills.softSkills" :key="soft">
              <h2>{{ soft.name }} <span>{{soft.name1}}</span></h2>
              <div class="col-md-12">
                <h4>{{ soft.skill }}</h4>
              </div>
            </div>
          </div> -->
        </div>
        <div class="row mx-auto h-4">
          <center>
            <h2>Soft <span>skill</span></h2>
          </center>
          <div class="col-md-3">
            <i class="fa-regular fa-clock"></i>
            <h4>Good Time Management</h4>
          </div>
          <div class="col-md-3">
            <i class="fa-solid fa-people-group"></i>
            <h4>Can Work In a Team</h4>
          </div>
          <div class="col-md-3">
            <i class="fa-solid fa-person"></i>
            <h4>Easy To Talk To</h4>
          </div>
          <div class="col-md-3">
            <i class="fa-solid fa-laptop-file"></i>
            <h4>Organised</h4>
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
  /* background: #1f1f1f; */
  background: rgba(31, 31, 31, .7);
  color: #e5e5e5;
  padding: 30px 0;
  border: 1px solid #59cbe8;
  scroll-margin: 56px;
}
#resume #resume-exp {
  font-weight: bold;
}
#resume p {
  font-size: 28px;
  padding: 10px 0;
}
#resume span {
  color: #59cbe8;
}
#resume #studio {
  color: #e5e5e5;
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
  color: #e5e5e5;
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
#resumeDiv {
  padding: 0 2.3%;
}
.h-4 h2 {
  padding: 14px 0;
}
.h-4 i {
  font-size: 25px;
  padding: 10px 0;
  color: #59cbe8;
  animation: hover 1.2s infinite alternate;
}
/* Hover effect */
@keyframes hover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-7px);
  }
}
</style>
