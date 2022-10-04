<template>
  <section id="projects">
    <h2>Projects</h2>
    <div v-if="projects">
      <div class="container">
        <div class="row mx-auto justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            v-for="project in projects"
            :key="project"
          >
            <div class="pic">
              <div class="card m-3 p-2">
                <img
                  :src="project.image"
                  class="card-img-top img-fluid"
                  :alt="project.projectName"
                />
                <div class="overlay">
                  <h3>{{project.projectName}}</h3>
                  <button class="btn-links">
                    <a :href="project.githubLink" target="_blank">Github</a>
                  </button>
                  <button class="btn-links">
                    <a :href="project.netlify" target="_blank">Netlify</a>
                  </button>
                  <button v-if="project.firebase" class="btn-links">
                    <a :href="project.firebase" target="_blank">Firebase</a>
                  </button>
                </div>
                <!-- <div class="card-body">
                <h5 class="card-title">{{ project.projectName }}</h5>
              </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No Projetcs to display</div>
  </section>
</template>
<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>
<style scoped>
#projects {
  background: #1f1f1f;
  color: #e5e5e5;
  padding: 0 0 10px 0;
  border: 10px solid #59cbe8;
  /* height: 100vh; */
  scroll-margin: 50px;
}
#projects .card {
  /* background-color: pink; */
  border: 2px solid #e5e5e5;
  border-radius: 30px;
}
#projects h2 {
  padding: 30px 0;
}
#projects h3 {
  font-weight: bold;
  font-size: 30px;
}
#projects img {
  border-radius: 30px;
  border: 7px solid #1f1f1f;
  height: 350px;
  object-fit: cover;
}
#projects p {
  max-height: 70px;
  overflow-y: auto;
}
.pic {
  width: auto;
}

.pic img {
  border: 2px solid #e5e5e5;
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/*Overlay*/
.pic .overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: #e5e5e5;
  display: inline-block;
  overflow: hidden;
  font-size: 30px;
  padding: 130px 0 0 0;
  border-radius: 30px;
  transition: 0.6s;
  opacity: 0;
}
.pic .overlay .btn-links {
  padding: 0px 10px;
  border-radius: 30px;
  margin: 0 5px;
  background: #1f1f1f;
  transition: 0.7s;
}
.pic .overlay .btn-links a{
  text-decoration: none;
  color: #59cbe8;
}
.pic .overlay .btn-links:hover {
  transform: scale(1.1);
}
.pic .overlay .btn-links {
  padding: 0px 10px;
  margin: 10px 0 0 5px;
  border-radius: 20px;
}
.pic:hover .overlay {
  opacity: 1;
  width: 100%;
}
</style>
