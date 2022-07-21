<template>
  <section id="testimonails">
    <h1>Testimonails</h1>
    <div v-if="testimonails">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-4"
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
                <p>{{ testimonail.level }}</p>
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
  border: 10px solid #e5e5e5;
  scroll-margin: 50px;
  padding: 30px 0;
}
h1{
  color: #e5e5e5 !important;
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
  background: #e5e5e5 !important;
  padding: 3px !important;
  border-radius: 30px;
  height: fit-content;
}
.row-test h5{
  padding: 0 0 10px 0;
  font-size: 30px;
  text-decoration: underline;
}
#aboutMe{
  height: 18vh;
  overflow: hidden;
  overflow-y: auto;
}
#testimonial .card {
  width: 100px;
  color: #1f1f1f;
}
</style>