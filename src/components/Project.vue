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
                  <h2>Hello</h2>
                  <p>by hengs</p>
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
  color: grey;
  padding: 0 0 10px 0;
  /* height: 100vh; */
}
#projects .card {
  background-color: pink;
  /* width: ; */
}
#projects img {
  /* border-radius: 50%; */
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
  object-fit: contain;
}

/*Overlay*/
.pic .overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #008cba;
  overflow: hidden;
  transition: 0.5s;
}
.pic:hover .overlay {
  width: 100%;
}
</style>
