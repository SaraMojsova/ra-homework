class Car{
    constructor(model,type,horsepower,speed, maxSpeed){
        this.model=model;
        this.type=type;
        this.horsepower=horsepower;
        this.speed=speed //
        this.maxSpeed=maxSpeed;
    }

    accelerate(addSpeed){
        // let speed=120;
        // speed+=addSpeed;
        this.speed+=addSpeed;
    }
    brake(decreaseSpeed){
        this.speed-=decreaseSpeed
        // return this.speed;
    }
    printSpeed(){
        if(this.speed<this.maxSpeed){
            console.log(`You are driving at ${this.speed} km/h`)
        }
        else{
            console.log(`You have reached the maximum speed!`)
        }
    }
    print(){
        console.log(`Car model: ${this.model}\nCar type: ${this.type}\nMaximum speed is: ${this.maxSpeed}`)
    }
}

const ford= new Car('Ford','hatchback',80, 120,220)
ford.print()

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

ford.accelerate(10)
ford.printSpeed();

//-----------------
console.log('-------------')

const tesla = new Car('Tesla','S',480,200,270)
tesla.print()

tesla.accelerate(10)
tesla.printSpeed()
tesla.accelerate(10)
tesla.printSpeed()
tesla.accelerate(10)
tesla.printSpeed()

//-----------------
console.log('-------------')

const mini= new Car('Mini Cooper','R50',134,130,150)

mini.print()

mini.accelerate(10)
mini.printSpeed()
mini.brake(10)
mini.printSpeed()
mini.brake(10)
mini.printSpeed()