const examPointsInput = prompt('Please add your points here');
let grade;

if (examPointsInput>=0 && examPointsInput<=100 && !examPointsInput.split('.')){
    if(examPointsInput>=51 && examPointsInput<=60){
        grade=6;
        console.log(`Congratulations, you have passed the exam. Your grade is: ${grade}`);
    }
    else if(examPointsInput>=61 && examPointsInput<=70){
        grade=7;
        console.log(`Congratulations, you have passed the exam. Your grade is: ${grade}`);
    }
    else if(examPointsInput>=71 && examPointsInput<=80){
        grade=8;
        console.log(`Congratulations, you have passed the exam. Your grade is: ${grade}`);
    }
    else if(examPointsInput>=81 && examPointsInput<=90){
        grade=9;
        console.log(`Congratulations, you have passed the exam. Your grade is: ${grade}`);
    }
    else if(examPointsInput>=91 && examPointsInput<=100){
        grade=10;
        console.log(`Congratulations, you have passed the exam. Your grade is: ${grade}`);
    }
    else{
        grade=5;
        console.log('Sorry you have failed the exam');
    }
}
else{
    alert('Please enter valid number of points between 0 and 100. It must be integer!');
}