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
const closeBtn = document.getElementById("closeModal"); 




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



//lauch close modal event
closeBtn.addEventListener("click", closeModal); 
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
let locationOk = false; 
let cuOk = true; 

//regex 
//General Email Regex (RFC 5322 Official Standard)
emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
numReg = /^\d+$/;
//Verify if name contains at least One letter - avoid 2 space characther for instance
nameReg = /[a-zA-Z]/;




function checkValue(e) {
 
  const value = e.target.value
  switch(e.target.name) {
    case "first" : 
      console.log('Switch first'); 
      console.log(e.target.value.length);
        if((e.target.value.length) > 1 && (value.match(nameReg))) {
          firstOk = true;
          e.target.nextElementSibling.textContent = "" ;
        } else {
          firstOk = false;
          console.log(e.target);
          console.log(e.target.nextElementSibling);
          e.target.nextElementSibling.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom." ;
        } 
        console.log(firstOk);
        break;
    case "last" : 
        if((e.target.value.length) > 1 && (value.match(nameReg))) {
          lastOk = true;
          e.target.nextElementSibling.textContent = "" ;
        } else {
          lastOk = false;
          e.target.nextElementSibling.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom." ;

        };
        console.log(lastOk);
        break;
    case "email" : 
        console.log(value);
        if (value.match(emailReg)) {
          emailOk = true; 
          e.target.nextElementSibling.textContent = "" ;
        } else {
          emailOk = false; 
          e.target.nextElementSibling.textContent = "Veuillez entrer une adresse mail correcte" ;

        };
        console.log('email ' + emailOk);
        break;
    case "quantity" :
        console.log('quantitu'); 
        if (value.match(numReg) && !isNaN(value)) {
          quantityOk = true; 
          console.log('q true'); 
        } else {
          quantityOk = false ;
          console.log('q false'); 
        };
        break; 
    case "location" : 
        console.log('location');
        locationOk = true;     
        break;
    case "cu" : 
        console.log(e.target.checked)  ; 
        if (e.target.checked) {
          cuOk = true; 
        } else {
          cuOk = false; 
        }
        console.log(cuOk);
        break;  
    default:    console.log('Default, something went wrong');

  }
  

  if (formIsComplete()) {
    console.log('complete')
  } 


}

function formIsComplete() {
  if (firstOk && lastOk && emailOk && quantityOk && locationOk && cuOk){
    return true; 
  } else {
    return false;
  }
}

