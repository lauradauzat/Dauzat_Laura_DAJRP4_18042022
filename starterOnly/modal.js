function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.getElementById("closeModal");
const inputs = document.querySelectorAll("input"); 





// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//apellé sur le click de la croix 
function closeModal() {
  console.log("clicked");
  modalbg.style.display = "none"; 
}


//logique de controle des données 
inputs.forEach((input) => input.addEventListener("change", checkValue));

//setting checks for inputs 
let firstOk = false; 
let lastOk = false; 
let emailOk  = false; 
let quantityOk = false; 

//regex 
//General Email Regex (RFC 5322 Official Standard)
emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
numReg = /^\d+$/;


function checkValue(e) {
 
  const value = e.target.value
  switch(e.target.id) {
    case "first" : 
      console.log('witch first'); 
      console.log(e.target.value.length);
        if((e.target.value.length) > 1) {
          firstOk = true;   
        } else {
          firstOk = false;
        } 
        console.log(firstOk);
        break;
    case "last" : 
        if((e.target.value.length) > 1) {
          lastOk = true;
        } else {
          lastOk = false;
        };
        console.log(lastOk);
        break;
    case "email" : 
        console.log(value);
        if (value.match(emailReg)) {
          emailOk = true; 
        } else {
          emailOk = false 
        };
        console.log('email ' + emailOk);
        break;
    case "quantity" :
        console.log('quantitu'); 
        if (value.match(numReg)) {
          quantityOk = true; 
        } else {
          quantityOk = false ;
        };
        break;
    default:    console.log('Default, something went wrong'); 
}
}