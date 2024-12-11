var allUsers = []

if(localStorage.getItem("users")) {
    allUsers =  JSON.parse(localStorage.getItem("users"))
}

var regexName = /^[a-zA-Z ]{3,50}$/
var regexEmail = /^[a-z0-9]{3,50}@[a-z]{3,50}\.[a-z]{3,50}$/
var regexPass = /^[a-zA-Z0-9]{3,50}$/

function isValid( input , regex ){
    return regex.test(input.value) ? true : false ;
}


function creatUser(nameInput , emailInput , passwordInput) {
    return {
        name : nameInput.value || undefined ,
        email : emailInput.value ,
        password : passwordInput.value
    }
}