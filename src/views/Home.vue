<template>
  <section id="home">
    <div id="text-in-middle" class="container">
      <div id="hover">
        <transition name="fade" appear>
          <h1>Ra'ees Benny</h1>
        </transition>
      </div>
        <transition name="fade" appear>
          <h2>Aspiring Web Developer</h2>
        </transition>
      <button>
        <a href="#resume">Resume</a>
      </button>
      <button>
        <a href="#skills">Skills</a>
      </button>
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
#home #hover{
  animation: hover 1.4s infinite alternate;
}
@keyframes hover {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(5px);
  }
}
#home h2 {
  color: #e5e5e5;
}
#home a{
  text-decoration: none;
  color: #e5e5e5;
}
#home #text-in-middle {
  padding: 260px 0 320px 0;
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
/* Button */
/* From uiverse.io by @SanketSuryawanshi */
button {
  --color: #59cbe8;
  position: relative;
  z-index: 1;
  margin: 20px 35px 0 35px;
}
button::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: transparent;
  top: -7px;
  left: -7px;
  z-index: -5;
  border-top: 3px solid var(--color);
  border-left: 3px solid var(--color);
  transition: 0.5s;
}
button::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: transparent;
  bottom: -7px;
  right: -7px;
  z-index: -5;
  border-right: 3px solid var(--color);
  border-bottom: 3px solid var(--color);
  transition: 0.5s;
}
button:hover::before {
  width: 100%;
  height: 100%;
}
button:hover::after {
  width: 100%;
  height: 100%;
}
button {
  padding: 0.7em 2em;
  background: rgba(31, 31, 31, 0.5);
  color: #fff;
  border: none;
  font-family: 'Lora', serif;
}
</style>
