function showMessage(input, message, isValid) {
  const parentElement = input.parentNode;
  const messageElement = parentElement.querySelector('#error-msg');
  messageElement.innerText = message;
  if (isValid) {
    input.classList.remove('is-invalid'); // uses bootstrap class
  } else {
    input.classList.add('is-invalid'); // uses bootstrap class
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