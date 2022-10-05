<template>
  <section id="testimonails">
    <h2>Testimonails</h2>
    <h3>Scroll what my testimonails say about me</h3>
    <div v-if="testimonails">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="testimonail in testimonails"
            :key="testimonail"
          >
            <div class="row row-test m-3">
              <div class="col-md-6">
                <img
                  :src="testimonail.image"
                  class="card-img-top img-fluid"
                  alt="..."
                />
              </div>
              <div class="col-md-6">
                <h5>{{ testimonail.name }}</h5>
                <p id="aboutMe">
                  <strong>{{ testimonail.aboutMe }}</strong>
                </p>
                <p id="position">{{ testimonail.position }}</p>
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
  /* background: #1f1f1f; */
  background: rgba(31, 31, 31,.5);
  color: #e5e5e5;
  height: max-content;
  border: 1px solid #59cbe8;
  scroll-margin: 56px;
  padding: 30px 0;
}
#testimonails img {
  /* padding: 10px 0 0 0; */
  margin: 10px 0 0 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 30px;
  border: 6px solid #1f1f1f;
}
.row-test {
  /* background: #e5e5e5 !important; */
  padding: 3px !important;
  border-radius: 30px;
  border: 3px solid #e5e5e5;
  height: fit-content;
}
.row-test h5 {
  color: #59cbe8;
  padding: 0 0 10px 0;
  font-size: 30px;
  text-decoration: underline;
}
.row-test #position {
  color: #59cbe8;
}
#aboutMe {
  height: 18vh;
  overflow: hidden;
  overflow-y: auto;
}
#testimonial .card {
  width: 100px;
  color: #1f1f1f;
}
</style>
