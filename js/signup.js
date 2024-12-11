var signup = document.querySelector(".signup") ;
var userName = document.querySelector(".userName")
var userEmail = document.querySelector(".userEmail")
var userPass = document.querySelector(".userPass")

// var allUsers = []

// var regexName = /^[a-zA-Z ]{3,50}$/
// var regexEmail = /^[a-z0-9]{3,50}@[a-z]{3,50}\.[a-z]{3,50}$/
// var regexPass = /^[a-zA-Z0-9]{3,50}$/


// function isValid( input , regex ){
//     return regex.test(input.value) ? true : false ;
// }

function isUserValid(){
    return( isValid(userName , regexName) && isValid(userEmail , regexEmail) && isValid(userPass , regexPass)  )
    
}
console.log(isUserValid())

// if(localStorage.getItem("users")) {
//     allUsers =  JSON.parse(localStorage.getItem("users"))
// }

// function creatUser(nameInput , emailInput , passwordInput) {
//     return {
//         name : nameInput.value ,
//         email : emailInput.value ,
//         password : passwordInput.value
//     }
// }

function setStorage (key , value) {
    localStorage.setItem(key , JSON.stringify(value) )
}

function clearInput(nameInput , emailInput , passwordInput) {
    nameInput.value = null ;
    emailInput.value = null ;
    passwordInput.value = null ;
}

function isEmailExist (useres , newUser) {
    return useres.some((user) => (user.email === newUser.email ? true : false) )
}


signup.addEventListener("click" , () => {
    if(isUserValid()) {
        console.log(isUserValid())
        var user = creatUser(userName , userEmail , userPass)
        if(!isEmailExist (allUsers , user )) {
            allUsers.push(user)
            setStorage("users" , allUsers)
            clearInput(userName , userEmail , userPass)
            Swal.fire({
               text: "Success Registration",
               icon: 'success',
               confirmButtonText: 'Okay'
            }).then(function(){
               window.location.href = "../index.html"
            })

        }
        else {
            // document.getElementById("message").innerHTML= "email already exists"

             Swal.fire({
                text: "email already exists",
                icon: 'error',
                confirmButtonText: 'Okay'
             })
        }
    }    
    else {
        //  document.getElementById("message").innerHTML= "All inputs is required "

        Swal.fire({
                text: "All inputs is required",
                icon: 'error',
                confirmButtonText: 'Okay'
             })

    }
    
    
    console.log(allUsers)

})