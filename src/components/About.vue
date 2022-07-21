<template>
  <section id="about">
    <h1>About</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <img :src="this.$store.state.portfolioUrl" alt="" class="img-fluid" />
        </div>
        <div class="col-12 col-md-6">
          <div v-if="about">
            <div v-for="para in about" :key="para">
              <p>{{ para.p }}</p>
            </div>
          </div>
          <div v-else>No data to display</div>
          <div class="container">
            <div class="row">
              <div class="col-4">
                <h4 class="card-title">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/ra-ees-benny-a915a923a/"
                  target="_blank"
                  ><ion-icon name="logo-linkedin" id="gitbig"></ion-icon
                ></a>
                Linkin Link
              </div>
              <div class="col-4">
                <h4 class="card-title">GitHub</h4>
                <a href="https://github.com/GarlicBuns19" target="_blank"
                  ><ion-icon name="logo-github" id="gitbig"></ion-icon
                ></a>
                Github Link
              </div>
              <div class="col-4">
                <h4 class="card-title">Willing to Relocate</h4>
                <ion-icon name="airplane-outline"></ion-icon> No
              </div>
              <div class="col-4">
                <h4 class="card-title">Email Address</h4>
                <p><ion-icon name="mail-outline"></ion-icon> raeespbenny@gmail.com</p>
              </div>
              <div class="col-4">
                <h4 class="card-title">Contact Number</h4>
                <ion-icon name="call-outline"></ion-icon> 0676145637
              </div>
              <div class="col-4">
                <h4 class="card-title">Location</h4>
                <ion-icon name="location-outline"></ion-icon> Cape Town
              </div>
              <div class="col-4">
                <h4 class="card-title">Gender</h4>
                <ion-icon name="man-outline"></ion-icon> Male
              </div>
              <div class="col-4">
                <h4 class="card-title">Date of Birth</h4>
                <ion-icon name="calendar-outline"></ion-icon> 26/09/2002
              </div>
              <div class="col-4">
                <h4 class="card-title">Full Name</h4>
                <ion-icon name="person-outline"></ion-icon> Ra'ees Benny
              </div>
            </div>
          </div>
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
  background: #1f1f1f;
  color: #E5E5E5;
  height: max-content;
  background-attachment: fixed;
  padding: 30px 0;
  scroll-margin: 50px;
  border: 10px solid #e5e5e5;
}
#about h1{
  padding: 30px  0;
}
#about p {
  text-align: center;
  padding: 0 20px;
}
#about img {
  width: 300px;
  height: 500px;
  object-fit: cover;
  /* object-position: 0 -60px; */
  object-position: -35.8px 0px;
  border-radius: 30px;
  border: 7px solid #E5E5E5;
}
</style>
