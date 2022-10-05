<template>
  <section id="home">
    <div id="text-in-middle" class="container">
      <transition name="fade" appear>
        <h1>Ra'ees Benny</h1>
      </transition>
      <transition name="fade" appear>
        <h2>Aspiring Web Developer</h2>
      </transition>
    </div>
  </section>
</template>
<script></script>
<style scoped>
#home {
  /* background: #1f1f1f; */
  color: #59cbe8;
  height: 100%;
  border: 1px solid #59cbe8;
}
#home h1 {
  font-weight: bold;
}
#home h2 {
  color: #e5e5e5;
}
#home #text-in-middle {
  padding: 260px 0 400px 0;
}
.fade-enter-from {
  transform: scale(0);
}
.fade-enter-to {
  /* transform: scale(0); */
  opacity: 1;
}
.fade-enter-active {
  transition: all 1s ease;
}
</style>
