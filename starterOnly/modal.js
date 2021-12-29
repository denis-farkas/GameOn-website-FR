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
  formSignUp[0].reset();
  modalbg.style.display = "none";
  formSignUp[0].style.display ="block";
  modalValid.style.display="none";
}

//close form modal and open success modal
function validModal(){
  formSignUp[0].style.display ="none";
  modalValid.style.display="block";
}

//close modal event
closer.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);


//regex verify if this is an email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isOnlyAlphabet(texte){
  return /^[a-zA-Z]*$/.test(texte);
}

function isPast(inpBirth){
  const date = new Date(inpBirth.value);
  console.log(date);
  console.log(Date.now());
  if(date.getTime() > Date.now()){
    return false;
  }else{
    return true;
  }
}



//count if input location is checked between all locations
function countRadioChecked(){
  let count=0;
  for(index=0; index<=5; index++){
    if(inpLocation[index].checked){
      count++;
    }
  }
  return count;
}



function validate(){
 //security trim input
  const firstValue = inpFirst.value.trim();
  const lastValue = inpLast.value.trim();
  const emailValue = inpEmail.value.trim();

//at least 2 characters in input
if(firstValue.length < 2 || !isOnlyAlphabet(firstValue)){
  formData[0].setAttribute("data-error-visible", "true"); 
  return false;
}else{
  formData[0].setAttribute("data-error-visible", "false");
}

//at least 2 characters in input
if(lastValue.length < 2 || !isOnlyAlphabet(lastValue)){
  formData[1].setAttribute("data-error-visible", "true");
  return false;
}else{
  formData[1].setAttribute("data-error-visible", "false");
}

//email no empty and valid regex
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

//birthdate no empty
if(inpBirth.value === '' || !isPast(inpBirth)){
  formData[3].setAttribute("data-error-visible", "true");
  return false;
}else{
  formData[3].setAttribute("data-error-visible", "false");
}

//quantity no empty
if(inpQuantity.value === ''){
  formData[4].setAttribute("data-error-visible", "true");
  return false;
}else{
  formData[4].setAttribute("data-error-visible", "false");
}

//one radio checked
if(countRadioChecked() === 0){
  formData[5].setAttribute("data-error-visible", "true");
 return false;
}else{
  formData[5].setAttribute("data-error-visible", "false");
}

//accept rgpd
if(!inpAccept.checked){
  formData[6].setAttribute("data-error-visible", "true");
  return false
}else{
  formData[6].setAttribute("data-error-visible", "false");
}
//reset and close form and open success modal

validModal();
}




