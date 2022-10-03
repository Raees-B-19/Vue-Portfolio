<template>
  <section id="home">
    <div id="text-in-middle">
      <transition name="fade" appear>
        <h1>Ra'ees Benny</h1>
      </transition>
        <h2>Web Developer</h2>
    </div>
  </section>
</template>
<script></script>
<style scoped>
#home {
  background: #1f1f1f;
  color: #59cbe8;
  height: 100vh;
  border: 10px solid #59cbe8;
}
#home h1 {
  color: #e5e5e5;
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
</style>
