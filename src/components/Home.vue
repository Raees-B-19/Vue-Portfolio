<template>
  <section id="home">
    <h1>Home</h1>
    <div v-if="home">
      <div v-for="pic in home" :key="pic">
        <img :src="pic.me" alt="" width="200" height="200" />
      </div>
    </div>
    <div v-else>No data</div>
  </section>
</template>
<script>
export default {
  computed: {
    home() {
      return this.$store.state.image;
    },
  },
};
</script>
<style scoped>
#home {
  background: #1f1f1f;
  color: white;
  height: 100vh;
}
</style>