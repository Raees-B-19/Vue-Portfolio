<template>
  <section id="contact">
    <h2>Contact Me</h2>
    <div class="container">
      <div class="row mx-auto">
        <div class="col-md-6 contact-center">
          <div class="col-12 col-md-12 col-spacing-edit">
            <h4 class="card-title">Contact Number</h4>
            <p>
              <ion-icon name="call-outline" class="icons"></ion-icon>
              067-6145-637
            </p>
          </div>
          <div class="col-12 col-md-12 col-spacing-edit">
            <h4 class="card-title">Email Address</h4>
            <p>
              <ion-icon name="mail-outline" class="icons"></ion-icon>
              raeespbenny@gmail.com
            </p>
          </div>
        </div>
        <div class="col-md-6" id="form">
          <form
            action="https://formspree.io/f/meqnyaeg"
            method="POST"
            target="_blank"
          >
            <div class="row mx-auto">
              <div class="col-md-12">
                <div class="mx-5 mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    name="Name"
                    type="Name"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mx-5 mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email address</label
                  >
                  <input
                    name="Email"
                    type="email"
                    class="form-control"
                    id="contact-name"
                    placeholder="email@gmail.com"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mx-5 mb-3">
                  <label for="subject" class="form-label">Subject</label>
                  <input
                    name="Subject"
                    type="subject"
                    class="form-control"
                    id="contact-subject"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mx-5 mb-3">
                  <label for="telephone" class="form-label">Telephone</label>
                  <input
                    name="Telephone"
                    type="number"
                    class="form-control"
                    id="contact-telephone"
                    placeholder="000-0000-000"
                    maxlength="10"
                    required
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mx-5 mb-3">
                  <label for="message" class="form-label"
                    >Send Me a Message</label
                  >
                  <textarea
                    name="Message"
                    class="form-control"
                    id="contact-message"
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <button type="submit" id="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#contact {
  /* background: #1f1f1f; */
  background: rgba(31, 31, 31, 0.7);
  color: #e5e5e5;
  border: 1px solid #59cbe8;
  padding: 10px 0;
}
#contact h1 {
  padding: 10px 0;
}
#contact input {
  background: transparent;
  color: #e5e5e5;
}
#contact textarea {
  background: transparent;
  color: #e5e5e5;
}
/* #contact #submit {
  color: #1f1f1f;
  color: #e5e5e5;
  background-color: #59CBE8;
  background-color: transparent;
  border: 3px solid #e5e5e5;
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 17px;
  transition: 0.7s;
}
#contact #submit:hover {
  transform: scale(1.2);
  border: 3px solid #59cbe8;
} */
.form-control:focus::placeholder {
  transition: 0.4s ease-in-out;
  color: transparent;
}
.form-control::placeholder {
  transition: 0.4s ease-in-out;
}
.icons {
  color: #59cbe8;
}
.col-spacing-edit {
  padding: 5px 0px;
}
/* Button */
/* From uiverse.io by @SanketSuryawanshi */
#contact #submit {
  --color: #59cbe8;
  position: relative;
  z-index: 1;
  margin: 10px;
}
#contact #submit::before {
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
#contact #submit::after {
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
#contact #submit:hover::before {
  width: 100%;
  height: 100%;
}
#contact #submit:hover::after {
  width: 100%;
  height: 100%;
}
#contact #submit {
  padding: 0.7em 2em;
  background: rgba(31, 31, 31, 0.7);
  color: #fff;
  border: none;
  font-family: "Lora", serif;
}
#contact .contact-center {
  padding: 150px 0 0 0;
}
@media screen and (max-width: 759px) {
  #contact .contact-center {
    padding: 10px 0 0 0;
  }
}
</style>
