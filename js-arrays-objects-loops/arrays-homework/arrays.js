//1.
const cars = ['Mercedes', 'Peugeot', 'Audi', 'KIA'];
//2.
cars.unshift('Opel');
//3.
if (cars.includes('BMW')) {
    console.log('BMW e del od nizata')
} else {
    console.log('BMW ne e del od nizata')
}
//4.
console.log(cars)
console.log(cars.sort());
console.log('ACC',cars.sort((a,b)=>a-b));
