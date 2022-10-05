<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimonails">Testimonails</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <!-- <li class="nav-item">
            <div @click="changeTheme">
              <i class="bi nav-link" :class="{ 'bi-brightness-high': dark, 'bi-moon': !dark }"></i>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
// export default {
//   data(){
//     return{
//       dark: false
//     }
//   },
//   methods: {
//     changeTheme() {
//       this.dark = !this.dark;
//       document.body.classList.toggle("dark-theme");
//     },
//   },
// };
</script>
<style scoped>
nav {
  /* background: #1f1f1f; */
  background: rgba(31, 31, 31,.86);
  border-left: 1px solid #59cbe8;
  border-right: 1px solid #59cbe8;
  padding: 5px;
  width: 100vw;
}
  .navbar-toggler-icon {
  background-image: url('../assets/images/Navbarwhite.png') !important;
}
.navbar-toggler{
  color: rgb(254, 255, 251);
  border-color: white;
}
ul li {
  padding: 0 25px;
  font-size: 20px;
}
a{
  color: #e5e5e5;
  transition: .7s;
}
a:hover{
  color: #e5e5e5;
  transform: scale(1.1);
}
</style>
