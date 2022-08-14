class User {
    #id;
    constructor(name, surname, id, age, nickname, email, password) {
      this.name = name;
      this.surname = surname;
      this.#id = id; //private
      this.age = age;
      this.nickname = nickname;
      this._email = email; //protected
      this.password = password;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
    introduce() {
        console.log(`Hello, my name is ${this.fullName}, and I am ${this.age} years old`);
    }
}    

class AdminUser extends User {
    #pin;
    constructor(name, surname, id, age, nickname, email, password, isSuperAdmin, permissions, pin){
        super(name, surname, id, age, nickname, email, password)
        this.isSuperAdmin=isSuperAdmin;
        this._permissions=permissions; //protected
        this.#pin=pin; //private
    }

    _generateToken(){
        return Math.floor(Math.random()*100)
    }

    get fullNameAndIsSuperAdmin() {
        return `${this.name} ${this.surname} ${this.isSuperAdmin ? 'is super admin': 'is not super admin'}`;
      }
}

const sara= new AdminUser('Sara','Mojsova',368,23,'saram','saramojs@gmail.com',12345,true,'edit',352)

console.log(sara.fullNameAndIsSuperAdmin);
console.log('Generate token',sara._generateToken());
sara.introduce()
console.log('----------------')
const martina= new AdminUser('Martina','Mitrevska',365,23,'martina...','martina@gmail.com',248,false,'review',354)
console.log(martina.fullNameAndIsSuperAdmin);
console.log('Generate token',martina._generateToken());
martina.introduce()
console.log('----------------')
const bojan= new AdminUser('Bojan','Petkovski',575,25,'boki','bojan@gmail.com',298,false,'print',878)
console.log(bojan.fullNameAndIsSuperAdmin);
console.log('Generate token',bojan._generateToken());
bojan.introduce()

