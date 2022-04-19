const zipCode = (zip) =>{
    if(zip>=1000 && zip<=7000){
        return true;
    }
    else{
        return false;
    }
}
const printMessage1 = zipCode(5000);
console.log(printMessage1);


const anotherFunction = (name,country, zip ,mobileNumber) =>{
    printMessage1;
    if(printMessage1){
        console.log(`Hello ${name}, Your data: Country - ${country}, Zip code - ${zip}, Mobile number - ${mobileNumber}`);
    }
    else{
        console.log('Registration Failed. Zip code is not valid');
    }
}
const printMessage2 = anotherFunction('Sara','Macedonia', '5000' ,123456);
console.log(printMessage2);

// Console results:
//true
//Hello Sara, Your data: Country - Macedonia, Zip code - 5000, Mobile number - 123456
//undefined 

// I'm not sure where does undefined come from