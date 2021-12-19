function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



// DOM Elements
const modalValid =document.querySelector(".valid");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formSignUp =document.getElementsByName('reserve');
const formData = document.querySelectorAll(".formData");
const closer = document.querySelector(".close");
const btnClose = document.querySelector(".btn-close");
const inpFirst = document.getElementById("first");
const inpLast = document.getElementById("last");
const inpEmail = document.getElementById("email");
const inpBirth = document.getElementById("birthdate");
const inpQuantity = document.getElementById("quantity");
const inpLocation = document.getElementsByName("location");
const inpAccept = document.getElementById("checkbox1");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal(){
  modalbg.style.display = "none";
}

function validModal(){
  formSignUp[0].style.display ="none";
  modalValid.style.display="block";
}

//close modal event
closer.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);



function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function locate(){
  let count=0;
  for(n=0; n<=5; n++){
    if(inpLocation[n].checked === true){
      count++;
    }
  }
  return count;
}



function validate(){
 
  const firstValue = inpFirst.value.trim();
  const lastValue = inpLast.value.trim();
  const emailValue = inpEmail.value.trim();


if(firstValue.length < 2){
  formData[0].setAttribute("data-error-visible", "true"); 
  return false;
}else{
  formData[0].setAttribute("data-error-visible", "false");
}

if(lastValue.length < 2){
  formData[1].setAttribute("data-error-visible", "true");
  return false;
}else{
  formData[1].setAttribute("data-error-visible", "false");
}

if(emailValue === '' ) {
  formData[2].setAttribute("data-error", "Veuillez indiquer un email");
  formData[2].setAttribute("data-error-visible", "true");
  return false;
 
} else if (!isEmail(emailValue)) {
  formData[2].setAttribute("data-error-visible", "true");
 return false;
}else{
  formData[2].setAttribute("data-error-visible", "false");
}

if(inpBirth.value === ''){
  formData[3].setAttribute("data-error-visible", "true");
  return false;
}else{
  formData[3].setAttribute("data-error-visible", "false");
}

if(inpQuantity.value === ''){
  formData[4].setAttribute("data-error-visible", "true");
  return false;
}else{
  formData[4].setAttribute("data-error-visible", "false");
}

if(locate() == 0){
  formData[5].setAttribute("data-error-visible", "true");
 return false;
}else{
  formData[5].setAttribute("data-error-visible", "false");
}

if(inpAccept.checked === false){
  formData[6].setAttribute("data-error-visible", "true");
  return false
}else{
  formData[5].setAttribute("data-error-visible", "false");
}

validModal();
}




