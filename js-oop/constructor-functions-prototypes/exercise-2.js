const Person= function(name,surname,id,age){
    this.name=name;
    this.surname=surname;
    this.id=id; //...
    this.age=age;
}

const User = function(name,surname,id,age,nickname,email,password){
    Person.call(this,name,surname,id,age);
    this.nickname=nickname;
    this._email=email;
    this.password=password;
}

// User.prototype={
//     get getFullName(){
//         return `${this.name} ${this.surname}`;
//     }
// }
// Object.defineProperty(Person.prototype,"fullName",{
//     get(){
//         return `${this.name} ${this.surname}`;
//     }
// })
const getter=User.prototype;
getter.__defineGetter__("fullName", function() {return `${this.name} ${this.surname}`})

User.prototype.isAdult= function(){
    console.log('Is adult:',this.age>=18? true: false)
}
User.prototype.introduce= function(){
    console.log(`Hello, my name is ${this.name}!`);
}
User.prototype.introduce2= function(){
    console.log(`Hello, my name is ${this.fullName}, and I am ${this.age} years old`);
}
User.prototype.getEmail=function(){
    return this._email;
}
User.prototype._generateToken=function(){
    return Math.floor(Math.random() * 100);
}

const sara= new User('Sara','Mojsova',368,23,'saram','saramojs@gmail.com',12345)
const martina= new User('Martina','Mitrevska',365,23,'martina...','martina@gmail.com',248354)
const bojan= new User('Bojan','Petkovski',575,12,'boki','bojan@gmail.com',298878)

sara.isAdult();
sara.introduce();
// console.log(sara.getFullName());
console.log(sara.fullName)
sara.introduce2();
console.log(sara.getEmail());
console.log(sara._generateToken());
console.log('------------------------')

martina.isAdult();
martina.introduce();
console.log(martina.fullName)
martina.introduce2();
console.log(martina.getEmail());
console.log(martina._generateToken());
console.log('------------------------')

bojan.isAdult();
bojan.introduce();
console.log(bojan.fullName)
bojan.introduce2();
console.log(bojan.getEmail());
console.log(bojan._generateToken());