//1. part one
let initialData=[200,500,300,1000]
console.log('INITIAL DATA: ',initialData)
console.log('Part 1 of the exercise -------------')

const incrementing=(array,padding)=>{
    const newArray=[];
    for(i=0;i<array.length;i++){
        newArray.push(array[i]+padding)
    }
    // for(el of array){
    //     el=el+padding //remove this
    //     newArray.push(el+padding) //same to this

    // }
    // the two for cycles do the same
    console.log('Incrementing function by 2',newArray)
}
incrementing(initialData,2)


const decrementing=(array,padding)=>{
    const newArray2=[]
    for(i=0;i<array.length;i++){
        newArray2.push(array[i]-padding)
    }
    console.log('Decrementing function by 2',newArray2)
}
decrementing(initialData,2)

//2.part two 
//HOF
console.log('Part 2 of the exercise --------------')

const operationInc = (number,padding)=>{
    return number+padding       
}
// 
const operationDec = (number,padding)=>{
    return number-padding    
}
const main =(array,fn,padding)=>{
    const newArray=[]
    for(const elem of array){
        newArray.push(fn(elem,padding))
    }
    return newArray
}
const incrHOF=main(initialData,operationInc,3)
const decrHOF=main(initialData,operationDec,3)
console.log(incrHOF)
console.log(decrHOF)
// Where to print the message `HOF call (increment) by 3` and `HOF call (increment) by 3` ?