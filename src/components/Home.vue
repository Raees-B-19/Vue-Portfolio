<template>
  <section id="home">
    <!-- <h1>Home</h1> -->
    <div id="text-in-middle">
      <transition name="fade" appear>
        <h1>Ra'ees Benny</h1>
      </transition>
      <transition name="left">
        <h2>Web</h2>
      </transition>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>
#home {
  background: #1f1f1f;
  /* background-image: url('../assets/images/road.png'); */
  color: white;
  height: 100vh;
  /* background-attachment: fixed; */
}
#home #text-in-middle {
  padding: 260px 0 0 0;
}
.fade-enter-from {
  transform: scale(0);
}
.fade-enter-to {
  /* transform: scale(0); */
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.7s ease;
}
.left-enter-from {
  transform: scaleX(-1500px);
}
.left-enter-to {
  transform: scaleX(-20px);
}
.left-enter-active {
}
</style>