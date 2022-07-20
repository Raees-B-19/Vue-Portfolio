<template>
  <section id="contact">
    <h1>Contact Me</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-6" id="form">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Name</label
                >
                <input
                  type="Name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Subject</label
                >
                <input
                  type="subject"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Telephone</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="000-0000-000"
                  maxlength="10"
                />
              </div>
            </div>
            <div class="col-md-12">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"
                  >Example textarea</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6" id="icons">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#contact{
  
}
#icons {
  font-size: 50px;
}
</style>