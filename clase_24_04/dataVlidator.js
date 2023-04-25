let emailInput = document.querySelector("#inputTextEmail")
let passwordInput = document.querySelector("#inputPassword")
let labelMessageDataValidator = document.querySelector(".labelMessageDataValidator")
let buttonSubmit = document.querySelector("#buttonSubmit")
let buttonForgotPassword = document.querySelector("#buttonForgotPassword")

let inputEmailStatus = {
    empty : "",
    stringValidator : [A-z]
}

function dataEmailValidator(emailInput){
    if (emailInput === inputEmailStatus.empty){
        return labelMessageDataValidator.innerText = "Hola"
    }
}

buttonForgotPassword.addEventListener('click', () => {
    if (emailInput === inputEmailStatus.empty){
        let message = labelMessageDataValidator.classList.add = p
        message.innerText = "Hola"
    }
})