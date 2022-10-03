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
                  <label for="name" class="form-label"
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
                    id="contact-name"
                    placeholder="eg@gmail.com"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mx-5 mb-3">
                  <label for="subject" class="form-label"
                    >Subject</label
                  >
                  <input
                    type="subject"
                    class="form-control"
                    id="contact-subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mx-5 mb-3">
                  <label for="telephone" class="form-label"
                    >Telephone</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="contact-telephone"
                    placeholder="000-0000-000"
                    maxlength="10"
                  />
                </div>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <div class="mx-5 mb-3">
                  <label for="message" class="form-label"
                    >Send Me a Message</label
                  >
                  <textarea
                    class="form-control"
                    id="contact-message"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-12">
                <button type="submit" id="submit">Submit</button>
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
  /* height: 77vh; */
  color: #e5e5e5;
}
#contact h1{
  padding: 10px 0;
}
#contact #submit{
  color: #1f1f1f;
  background-color: #59CBE8;
  border: 3px solid #e5e5e5;
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 17px;
  transition: .7s;
}
#contact #submit:hover{
  transform: scale(1.2);
}
.form-control:focus::placeholder{
    transition: 0.4s ease-in-out;
    color: transparent;
}
.form-control::placeholder{
    transition: 0.4s ease-in-out;
}
</style>
