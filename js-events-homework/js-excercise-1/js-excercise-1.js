const loginForm = document.querySelector('#login-form'); 
let userEmail = document.querySelector('#userEmail')
let userPassword = document.querySelector('#userPassword')
userEmail.addEventListener('input', (e) => {
    e.preventDefault()  
    console.log(e.target)  

})
userPassword.addEventListener('input', (e) => {
    e.preventDefault  
   
})
loginForm.addEventListener('submit', event => {
    event.preventDefault(); 
    const formElements = event.target.elements; 
    const email = formElements.userEmail; 
    const password = formElements.userPassword; 
    const emailValidation = validateEmail(email); 
    const passwordValidation = validatePassword(password); 
    const lengthEmailValidation = validateEmailLength(email, 3, 320); 
    const lengthPasswordValidation = validatePasswordLength(password, 8, 20); 
    if (!emailValidation || !passwordValidation || !lengthEmailValidation || !lengthPasswordValidation) { 
        return; 
    }
    alert(`The form is submitted. Form data: ${JSON.stringify({ email: email.value, password: password.value })}`);
});