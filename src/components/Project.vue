<template>
  <section id="projects">
    <h1>Projetcs</h1>
    <div v-if="projects">
      <div class="container">
        <div class="row">
          <div class="col-md-3" v-for="project in projects" :key="project">
            <div class="card m-3 p-3">
              <img :src="project.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ project.projectName }}</h5>
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
  border-radius: 50%;
  object-fit: cover;
}
#projects p {
  max-height: 70px;
  overflow-y: auto;
}
</style>