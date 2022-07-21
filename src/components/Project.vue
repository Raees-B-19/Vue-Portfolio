<template>
  <section id="projects">
    <h1>Projetcs</h1>
    <div v-if="projects">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-4"
            v-for="project in projects"
            :key="project"
          >
            <div class="pic">
              <div class="card m-3 p-3">
                <img :src="project.image" class="card-img-top" alt="..." />
                <div class="overlay">
                  <i class="bi bi-github"></i>
                  <i class="bi bi-github"></i>
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
  border: 10px solid #e5e5e5;
  /* height: 100vh; */
  scroll-margin: 50px;
}
#projects .card {
  background-color: pink;
  border-radius: 30px;
  /* width: ; */
}
#projects img {
  border-radius: 30px;
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
  border: 2px solid #fff;
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
  padding: 160px 0 0 0;
  border-radius: 30px;
  transition: 0.6s;
  opacity: 0;
}
.pic .overlay i {
  padding: 0 25px;
}
.pic:hover .overlay {
  opacity: 1;
  width: 100%;
}
</style>
