

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const close = document.getElementById("closeModal");
const inputs = document.querySelectorAll("input"); 
const closeBtn = document.getElementById("closeModal"); 
const form = document.getElementById('form');

const divFirst = document.getElementById('divFirst'); 
const divLast = document.getElementById('divLast'); 
const divMail = document.getElementById('divMail'); 
const divBirth =  document.getElementById('divBirth'); 
const divQuantity = document.getElementById('divQuantity'); 
const divCu = document.getElementById('divCu'); 
const conf = document.getElementById("confirmation");

//setting checks for inputs 
let firstOk = false; 
let lastOk = false; 
let emailOk  = false; 
let quantityOk = false; 
let birthOk = false; 
let locationOk = false; 
let cuOk = true; 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//lauch close modal event
closeBtn.addEventListener("click", closeModal); 

//logique de controle des données 
inputs.forEach((input) => input.addEventListener("change", checkValue));

//écoute le submit button
form.addEventListener('submit', handleSubmit);

//regex 
//General Email Regex (RFC 5322 Official Standard)
emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
numReg = /^\d+$/;
//Verify if name contains at least One letter - avoid 2 space characther for instance
nameReg = /[a-zA-Z]/;


//responsive navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  console.log("clicked");
  if (conf.style.display == "flex") {
    refreshModals(); 
  }
  modalbg.style.display = "none"; 
}

function checkValue(e) {
  const value = e.target.value; 
  
  switch(e.target.name) {
    case "first" : 
      console.log('Switch first'); 
      console.log(e.target.value.length);
        if((e.target.value.length) > 1 && (value.match(nameReg))) {
          firstOk = true;
          divFirst.setAttribute('data-error-visible', 'false'); 
        } else {
          firstOk = false;
          divFirst.setAttribute('data-error-visible', 'true'); 
        } 
        console.log(firstOk);
        break;

    case "last" : 
        
        if((e.target.value.length) > 1 && (value.match(nameReg))) {
          lastOk = true;
          divLast.setAttribute('data-error-visible', 'false'); 
        } else {
          lastOk = false;
          divLast.setAttribute('data-error-visible', 'true'); 
        };
        console.log(lastOk);
        break;

    case "email" : 

        console.log(value);

        if (value.match(emailReg)) {
          emailOk = true; 
          divMail.setAttribute('data-error-visible', 'false'); 

        } else {
          emailOk = false; 
          divMail.setAttribute('data-error-visible', 'true'); 

        };
        console.log('email ' + emailOk);
        break;

    case "birthdate" : 
        console.log('birthdate : ' + value); 
        if (value != ''){
            birthOk = true; 
            console.log('birth true');
            divBirth.setAttribute('data-error-visible', 'false'); 
        } else {
            birthOk = false ;
            console.log('birth false'); 
            divBirth.setAttribute('data-error-visible', 'true'); 
        }
        break;   

    case "quantity" :

        console.log('quantity'); 
        if (value.match(numReg) && !isNaN(value)) {
          quantityOk = true; 
          console.log('q true'); 
          divQuantity.setAttribute('data-error-visible', 'false'); 

        } else {
          quantityOk = false ;
          console.log('q false'); 
          divQuantity.setAttribute('data-error-visible', 'true'); 
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
          divCu.setAttribute('data-error-visible', 'false'); 

        } else {
          cuOk = false; 
          divCu.setAttribute('data-error-visible', 'true'); 

        }
        console.log(cuOk);
        break;  
    default:    console.log('Default, something went wrong');

  }
  



}

function handleSubmit(e) {
  console.log('handleSubmit');
  e.preventDefault();
  if (firstOk && lastOk && emailOk && birthOk && quantityOk && locationOk && cuOk){
    console.log('true');
    openConfirmationModal();
    return true; 
  } else {
    console.log('false');

    if (!firstOk) {
      divFirst.setAttribute('data-error-visible', 'true'); 
    }; 

    if (!lastOk) {
      divLast.setAttribute('data-error-visible', 'true'); 
    }; 

    if(!emailOk){
      divMail.setAttribute('data-error-visible', 'true'); 
    }

    if(!birthOk){
      divBirth.setAttribute('data-error-visible', 'true'); 
    }

    if(!quantityOk){
      divQuantity.setAttribute('data-error-visible', 'true'); 
    }

    if(!locationOk){
      divLocation.setAttribute('data-error-visible', 'true'); 
    }

    if(!cuOk){
      divCu.setAttribute('data-error-visible', 'true'); 
    }
    return false;
  }
}

function openConfirmationModal(){
  console.log("openConfirmationModal");
  form.style.display = "none";
  conf.style.display = "flex";

}

function refreshModals(){
  form.style.display = "block";
  conf.style.display = "none";
  console.log('refreshing dsiplay ');
}