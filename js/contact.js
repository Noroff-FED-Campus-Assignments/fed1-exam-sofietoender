const formEl = document.querySelector("#js-form");
const nameEl = document.querySelector("#fname");
const lastNameEl = document.querySelector("#lname");
const addressEl = document.querySelector("#address");
const emailEl = document.querySelector("#email");
const subjectEl = document.querySelector("#subject");
const messageEl = document.querySelector("#message");


const nameError = document.querySelector("#js-name-error");
const emailError = document.querySelector("#js-email-error");
const addressError = document.querySelector("#js-address-error");
const messageError = document.querySelector("#js-message-error");
const subjectError = document.querySelector("#js-subject-error");
const lnameError = document.querySelector("#js-lname-error");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameEl.value;
  const lname = lastNameEl.value;
  const email = emailEl.value;
  const address = addressEl.value;
  const subject = subjectEl.value;
  const message = messageEl.value;

  if (name === "") {
    alert("Please enter a name");
    return;
  }
  if (lname === "") {
    alert("Please enter a name");
    return;
  }
  

  if (email === "") {
    alert("Please enter an email");
    return;
  }

  if (address.length < 25) {
    alert("Address must be more than 25 characters");
    return;
  }
  if (subject === "") {
    alert("Please enter a subject");
    return;
  }

  if (message === "") {
    alert("Please enter a message");
    return;
  }

  alert("Form submitted");

  nameEl.value = "";
  lastNameEl.value = "";
  emailEl.value = "";
  addressEl.value = "";
  subjectEl.value = "";
  messageEl.value = "";
});



nameEl.addEventListener("blur", (event) => {
  const lname = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z]{2,}/;

  if (!minLengthRegex.test(lname)) {
    nameError.innerHTML =
      "Name must be at least 2 characters long and must be letters only";
  } else {
    nameError.innerHTML = "";
  }
});

lastNameEl.addEventListener("blur", (event) => {
  const lname = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z]{2,}/;

  if (!minLengthRegex.test(lname)) {
    lnameError.innerHTML =
      "Last name must be at least 2 characters long and must be letters only";
  } else {
    lnameError.innerHTML = "";
  }
});



emailEl.addEventListener("blur", (event) => {
  const email = event.target.value.trim();

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!emailRegex.test(email)) {
    console.log("feil");
    emailError.innerHTML = "Email is not valid";
  } else {
    emailError.innerHTML = "";
  }
});
addressEl.addEventListener("blur", (event) => {
  const address = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z0-9_ ]{25,}/g;

  if (!minLengthRegex.test(address)) {
    addressError.innerHTML = "Address must be at least 25 characters long";
  } else {
    addressError.innerHTML = "";
  }
});

subjectEl.addEventListener("blur", (event) => {
  const subject = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z0-9_ ]{10,}/g;

  if (!minLengthRegex.test(subject)) {
    subjectError.innerHTML = "Subject must be at least 10 characters long";
  } else {
    subjectError.innerHTML = "";
  }
});


messageEl.addEventListener("blur", (event) => {
  const message = event.target.value.trim();

  const minLengthRegex = /^[a-zA-Z0-9_ ]{10,}/g;

  if (!minLengthRegex.test(message)) {
    messageError.innerHTML = "Message must be at least 10 characters long";
  } else {
    messageError.innerHTML = "";
  }
});