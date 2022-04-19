function personalData(name,surname,age,username,password){
    if(name===undefined){
        console.log(`Please enter your name.`);
    }
    else if(surname===undefined){
        console.log(`Please enter your surname.`);
    }
    else if(age===undefined){
        console.log(`Please enter your age.`);
    }
    else if(username===undefined){
        console.log(`Please enter your username.`);
    }
    else if(password===undefined){
        console.log(`Please enter your password.`);
    }
    else{
        console.log(`Welcome ${name} ${surname}. You are ${age} years old. Your username is ${username} and password ${password}`);
    }
}
const displayMessage= personalData('Sara','Mojsova',22,'saramojsova','sara1234');
console.log(displayMessage);

// Console results: 
//Welcome Sara Mojsova. You are 22 years old. Your username is saramojsova and password sara1234
//undefined

// I'm not sure where does undefined come from