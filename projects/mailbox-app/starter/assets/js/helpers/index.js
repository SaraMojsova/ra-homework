//generira random brojki
const generateId=()=>{
return Math.random().toString().slice(2,11) // 0.123456789 //go pretvorame vo string(niza od el) //slice => 123456789
}