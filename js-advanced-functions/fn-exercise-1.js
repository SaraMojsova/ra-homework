//1. part one
let initialData=[200,500,300,1000]
console.log('INITIAL DATA: ',initialData)
let newArray=[]
console.log('Part 1 of the exercise -------------')

const incrementing=(array,padding)=>{
    for(i=0;i<array.length;i++){
        array[i]=array[i]+padding
        // console.log(array)
    }
    // for(el of array){
    //     el=el+padding
    //     // console.log(el)
    // }
    // the two for cycles do the same
    newArray=array
    console.log('Incrementing function by 2',newArray)
}
incrementing(initialData,padding=2)

let newArray2=[]
initialData=[200,500,300,1000]

const decrementing=(array,padding)=>{
    for(i=0;i<array.length;i++){
        array[i]=array[i]-padding
        // console.log(array)
    }
    newArray2=array
    console.log('Decrementing function by 2',newArray2)
}
decrementing(initialData,padding=2)

//2.part two 
//HOF
console.log('Part 2 of the exercise --------------')
let newArray3=[]
initialData=[200,500,300,1000]

const operationInc = (array,padding)=>{
    for(i=0;i<array.length;i++){
        array[i]=array[i]+padding
    }
    newArray3=array
    return newArray3    
}
// 
let newArray4=[]
initialData=[200,500,300,1000]

const operationDec = (array,padding)=>{
    for(i=0;i<array.length;i++){
        array[i]=array[i]-padding;
        // console.log('initial data',initialData)
    }
    newArray4=array
    return newArray4    
}//is not working
const main =(array,fn,padding)=>{
    // array=initialData
    console.log('HOF call (decrement) by 3',fn(array,padding))
}
main(initialData,operationInc,padding=3)
main(initialData,operationDec,padding=3)