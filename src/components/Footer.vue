<template>
  <section id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <i class="bi bi-github icons" id="git"></i>
          <i class="bi bi-linkedin icons" id="git"></i>
        </div>
        <div class="col-md-12">
          <h5>Copyright&copy {{ currentYear }} Ra'ees Benny</h5>
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
      currentYear: new Date().getFullYear(), // 2020
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
  border: 10px solid #e5e5e5;
  height: 20vh;
}
.icons {
  padding: 0 10px;
}
#git {
  transition: 0.7s ease;
}
#git:hover {
  transform: scale(1.4);
}
</style>