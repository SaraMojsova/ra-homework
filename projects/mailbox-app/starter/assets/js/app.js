// this is the main app file

const users= seedData();

// header elements
const loginBtn=document.querySelector('#login-btn')
const registerBtn= document.querySelector('#register-btn')
const logoutBtn= document.querySelector('#logout-btn')

//form elements
const loginForm = document.querySelector('#login-form')
const emailField= document.querySelector('#userEmail')
const passwordField= document.querySelector('#userPassword')
const submitErrorMsg=document.querySelector('#submit-error')

// event listeners
const loginBtnClickHandler =()=>{
    loginForm.classList.toggle('hide') // adds or removes class .hide
}
loginBtn.addEventListener('click',loginBtnClickHandler)

const emailValidateHandler=(event)=>{
    validateEmail(event.target)
}
emailField.addEventListener('input',emailValidateHandler)

const passwordValidateHandler =(event)=>{
    validatePassword(event.target)
}
passwordField.addEventListener('input',passwordValidateHandler)

const loginFormSubmitHandler=(event)=>{
    event.preventDefault()
    submitErrorMsg.textContent=''
    const isEmailValid=validateEmail(emailField)
    const isPasswordValid= validatePassword(passwordField)
    const submitBtn=event.submitter; // dom element

    if(!isEmailValid || !isPasswordValid){
        return;
    }

    //submit implementation
    const email=emailField.value;
    const password=passwordField.value;

    submitBtn.firstChild.nextSibling.classList.toggle('hide')

    
   
//with the timeout we simulate network delay
    setTimeout(()=>{
        const foundUser = users.find((user)=>{
            return user.email ===email && user.password===password
        })
        submitBtn.firstChild.nextSibling.classList.toggle('hide')

        if(foundUser){
            console.log('user logged in', foundUser)
            // submitBtn.firstChild.nextSibling.classList.toggle('hide')
            // alert('Success')
        }else{
            //show error message
            submitErrorMsg.textContent='Wrong email or password'
        }
    },2000)
   
}
loginForm.addEventListener('submit',loginFormSubmitHandler)