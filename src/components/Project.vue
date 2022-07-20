<template>
  <section id="projects">
    <h1>Projetcs</h1>
    <div v-if="projects">
      <div class="container">
        <div class="row">
          <div
            class="card m-3 p-3"
            v-for="project in projects"
            :key="project"
            style="width: 18rem"
          >
            <img :src="project.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ project.projectName }}</h5>
              <p class="card-text">{{ project.aboutProject }}.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
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
  height: 100vh;
}
#projects img{
    width: 200px;
    height: 200px;
    object-fit: cover;
}
#projects p{
    max-height: 70px;
    overflow-y: auto;
}
</style>