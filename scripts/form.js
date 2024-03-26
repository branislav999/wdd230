const value = document.querySelector("#rangevalue");
const input = document.querySelector("#range");

input.addEventListener("input", displayValue);

function displayValue(){
    value.innerHTML = input.value
}


document.querySelector("#confirmPassword").addEventListener("blur", comparePasswords);


const password = document.querySelector("#password"); 
const confirm = document.querySelector("#confirmPassword"); 
const passwordMatchLabel = document.querySelector("#passwordMatch");


function comparePasswords() {
    if (password.value === confirm.value){
        passwordMatchLabel.innerHTML = "";

    }
    else{
        passwordMatchLabel.innerHTML = "Passwords do not match";
        password.value = ""; 
        confirm.value = ""; 
        password.focus();
    }
}