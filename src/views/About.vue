<template>
  <section id="about">
    <h2>About</h2>
    <h3>I am <span>Ra'ees Benny</span></h3>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <img :src="this.$store.state.portfolioUrl" alt="" class="img-fluid" />
        </div>
        <div class="col-12 col-md-6">
          <div v-if="about">
            <div v-for="para in about" :key="para">
              <p class="about-data">{{ para.p }}</p>
            </div>
          </div>
          <div v-else>No data to display</div>
          <div class="container">
            <div class="row mx-auto">
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">LinkedIn</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/ra-ees-benny-a915a923a/"
                    target="_blank"
                    ><ion-icon
                      name="logo-linkedin"
                      class="gitbig icons"
                    ></ion-icon
                  ></a>
                  Linkedin Link
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title"> GitHub</h4>
                <p>
                  <a href="https://github.com/GarlicBuns19" target="_blank"
                    ><ion-icon
                      name="logo-github"
                      class="gitbig icons"
                    ></ion-icon
                  ></a>
                  Github Link
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">Willing to Relocate</h4>
                <p>
                  <ion-icon name="airplane-outline" class="icons"></ion-icon> No
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">Contact Number</h4>
                <p>
                  <ion-icon name="call-outline" class="icons"></ion-icon>
                  0676145637
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">Location</h4>
                <p>
                  <ion-icon name="location-outline" class="icons"></ion-icon>
                  Cape Town
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">Gender</h4>
                <p>
                  <ion-icon name="man-outline" class="icons"></ion-icon> Male
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">Date of Birth</h4>
                <p>
                  <ion-icon name="calendar-outline" class="icons"></ion-icon>
                  26/09/2002
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">Full Name</h4>
                <p>
                  <ion-icon name="person-outline" class="icons"></ion-icon>
                  Ra'ees Benny
                </p>
              </div>
              <div class="col-6 col-md-6 col-spacing-edit">
                <h4 class="card-title">Email Address</h4>
                <p>
                  <ion-icon name="mail-outline" class="icons"></ion-icon>
                  raeespbenny@gmail.com
                </p>
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
    resume() {
      return this.$store.state.resume;
    },
  },
};
</script>

<style scoped>
#about {
  background: #1f1f1f;
  /* background: var(--background-color); */
  color: #e5e5e5;
  height: max-content;
  background-attachment: fixed;
  padding: 30px 0;
  scroll-margin: 50px;
  border: 10px solid #59cbe8;
}
#about h2 {
  padding: 0px 0 20px 0;
}
#about h3 {
  font-size: 30px;
  padding: 0 0 10px 0;
}
#about p {
  font-size: 19.6px;
}
#about .about-data {
  font-size: 20px;
}
#about span {
  color: #59cbe8;
}
.col-spacing-edit {
  padding: 5px 0;
}
.gitbig {
  text-decoration: none;
  color: #59cbe8;
  transition: 0.7s;
}
.gitbig:hover {
  transform: scale(1.3);
}
.icons {
  color: #59cbe8;
}
#about img {
  width: 300px;
  height: 500px;
  object-fit: cover;
  /* object-position: 0 -60px; */
  object-position: -35.8px 0px;
  border-radius: 30px;
  border: 7px solid #e5e5e5;
}
</style>
