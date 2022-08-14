<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <a href="https://github.com/GarlicBuns19" target="_blank">
            <ion-icon
              name="logo-github"
              class="icon-size"
              id="gitbig2"
            ></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/ra-ees-benny-a915a923a/"
            target="_blank"
          >
            <ion-icon
              name="logo-linkedin"
              class="icon-size"
              id="gitbig2"
            ></ion-icon>
          </a>
        </div>
        <div class="col-md-12">
          <h5>Copyright&copy {{ currentYear }} Ra'ees Benny</h5>
        </div>
      </div>
    </div>
    <!-- <h1>Footer</h1> -->
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  background: #1f1f1f;
  color: #e5e5e5;
  /* padding: 0 0 10px 0; */
  padding: 30px 0;
  border: 10px solid #59CBE8;
  height: 20vh;
}
.icon-size{
  font-size: 2em;
  padding: 0 10px;
}
#footer a{
  color: #59CBE8;
}
#gitbig2{
  transition: 0.6s;
}
#gitbig2:hover{
  transform: scale(1.3);
}
</style>
