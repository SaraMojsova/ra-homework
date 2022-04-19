function switchCase(points){
    switch(true){
        case (points>=51 && points<=60):
            console.log(`Congratulations, you have passed the exam. Your grade is: 6`);
            break;
        case (points>=61 && points<=70):
            console.log(`Congratulations, you have passed the exam. Your grade is: 7`);
            break;        
        case (points>=71 && points<=80):
            console.log(`Congratulations, you have passed the exam. Your grade is: 8`);
            break;        
        case (points>=81 && points<=90):
            console.log(`Congratulations, you have passed the exam. Your grade is: 9`);
            break; 
        case (points>=91 && points<=100):
            console.log(`Congratulations, you have passed the exam. Your grade is: 10`);
            break;
        default:
            console.log('Sorry, you have failed the exam');  
    }
}
const results=switchCase(65);
console.log(results);

// Console results:
//Congratulations, you have passed the exam. Your grade is: 7
//undefined

// I'm not sure where does undefined come from