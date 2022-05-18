function showMessage(input, message, isValid) {
    const errorEl = input.nextElementSibling; // input -> p
    errorEl.innerText = message;
    input.className = isValid ? "success" : "error";
    if(!isValid){
        input.className="icons"
    }
    return isValid;
  }
  
  function showError(input, message) {
    return showMessage(input, message, false);
  }
  
  function showSuccess(input) {
    return showMessage(input, '', true);
  }
  
  /**
   * Validation functions
   */
  function hasValue(input, message) {
    if (input.value.trim() === '') {
      return showError(input, message);
    }
    return showSuccess(input);
  }
  
  function validateEmail(input) {
    if (!hasValue(input, 'Email is required')) {
      return false;
    }
  
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    const emailValue = input.value.trim();
    if (!emailRegex.test(emailValue)) {
      return showError(input, 'Invalid email address');
    }
    return true;
  }
  
  function validatePassword(input) {
    if (!hasValue(input, 'Password is required')) {
      return false;
    }
  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  
    const passwordValue = input.value.trim();
    
    if (!passwordRegex.test(passwordValue)) {
      return showError(input, 'The password should contain an upper case, lower case and a number');
    }
    return true;
  }
// NEW CODE

function validateEmailLength(input, min, max) {    
    const inputEmail = input.value;    
    const minLength = min;    
    const maxLength = max;      
    if (inputEmail.length !== 0 && inputEmail.length < minLength || inputEmail.length > maxLength) {      
        return showError(input, 'Email must contain at 3-320 characters');    
    }else {        
        return true;    
    }  
}    
function validatePasswordLength(input, min, max) {    
     const inputPassword = input.value;    
     const minLength = min;    
     const maxLength = max; 
     
     let lengthPassword = inputPassword.length++
     console.log(inputPassword)
     console.log(lengthPassword)

     if (inputPassword.length !== 0 && inputPassword.length < minLength || inputPassword.length > maxLength) {      
         return showError(input, 'Password must contain 8-20 characters');    
     }else {        
        return true;    
    }  
}
