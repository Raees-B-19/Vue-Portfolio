<template>
  <section id="contact">
    <h1>Contact Me</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-12" id="form">
          <form
            action="https://formspree.io/f/meqnyaeg"
            method="POST"
            target="_blank"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="mx-5 mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Name</label
                  >
                  <input
                    name="name"
                    type="Name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mx-5 mb-3">
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
                <div class="mx-5 mb-3">
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
                <div class="mx-5 mb-3">
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
                <div class="mx-5 mb-3">
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
              <div class="col-md-12">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
        <!-- <div class="col-md-6" id="icons">
          <i class="bi bi-github"></i>
          <i class="bi bi-linkedin"></i>
        </div> -->
      </div>
    </div>
  </section>
</template>
<style scoped>
#contact{
  background: #1f1f1f;
  scroll-margin: 50px;
  border: 10px solid #59CBE8;
  padding: 10px 0;
  height: 77vh;
  color: #e5e5e5;
}
#contact h1{
  padding: 30px 0;
}
</style>
