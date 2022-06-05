import { fruits1, fruits2 } from "../constants.js";

//1.
const fullNameFunction=({firstName,lastName})=>{
    return `Full name is: ${firstName} ${lastName} `
}

export default fullNameFunction;

//3.
const concatenateFruits=()=>{
    const fruits=[...fruits1,...fruits2]
    console.log(fruits)
}
export {
    concatenateFruits as concFruits
}

/*To execute one exercise please comment the other unnecessary exercises' code block
because there come different errors
*/