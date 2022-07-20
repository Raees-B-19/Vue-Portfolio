<template>
  <section id="about">
    <h1>About</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <img :src="this.$store.state.portfolioUrl" alt="" class="img-fluid"/>
        </div>
        <div class="col-12 col-md-6">
          <div v-if="about">
            <div v-for="para in about" :key="para">
              <p>{{ para.p }}</p>
            </div>
          </div>
          <div v-else>No data to display</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    about() {
      return this.$store.state.about;
    },
  },
};
</script>

<style scoped>
#about {
  background: green;
  /* color: #E5E5E5; */
  color: white;
  height: max-content;
  background-attachment: fixed;
  padding: 0 0 10px 0;
}
#about p {
  text-align: center;
  padding: 0 20px;
}
#about img{
    width: 300px;
    height: 500px;
    object-fit: cover;
    object-position: 0 -60px;
}
</style>
