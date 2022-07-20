<template>
  <section id="testimonails">
    <h1>Test</h1>
    <div v-if="testimonails">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-4"
            v-for="testimonail in testimonails"
            :key="testimonail"
          >
            <div class="card m-3">
              <img
                :src="testimonail.image"
                class="card-img-top img-fluid"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{{ testimonail.name }}</h5>
                <p class="card-text">{{ testimonail.aboutMe }}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No testimonails</div>
  </section>
</template>
<script>
export default {
  computed: {
    testimonails() {
      return this.$store.state.testimonails;
    },
  },
};
</script>

<style scoped>
#testimonails {
  background: #1f1f1f;
  color: black;
  height: max-content;
}
</style>