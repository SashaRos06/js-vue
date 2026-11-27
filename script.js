let form = document.querySelector('form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let terms = document.querySelector('#terms');
let results = document.querySelector('#results');

function showError(input, errorId, message) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    input.setAttribute('area-invalid', 'true');
    document.querySelector(errorId).textContent = message;
    return false;
}
function showSuccess(input, errorId) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    input.setAttribute('area-invalid', 'false');
    return true;
}

function validateName(){
    if(username.value.trim.length < 2){
        return showError(username, '#username-error', "Введіть мінімум 2 символи");
    }
    return showSuccess(username);
}
function validateEmail() {
    if(email.value.trim() === ""){
        return showError(email, '#email-error', "Введіть коректну пошту");
    }
    return showSuccess(email);
}
function validatePassword() {
    if(password.value.trim() === "" || password.value.trim().length < 8){
        return showError(password, '#password-error', "Пароль мінімум 8 символів");
    }
    return showSuccess(password);
}
function validateConfirmPassword() {
    if(confirmPassword.value.trim() === "" || confirmPassword.value !== password.value){
        return showError(confirmPassword, '#confirm-error', "Паролі не співпадають");
    }
    return showSuccess(confirmPassword);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    result.textContent = '';
});