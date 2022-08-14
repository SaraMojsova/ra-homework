const Car= function(make,speed){
    this.make=make;
    this.speed=speed;
}

const ElectricCar= function(make,speed,charge){
    Car.call(this,make,speed);
    this.charge=charge;
}

ElectricCar.prototype.chargeBattery=function(chargeTo){
    this.charge=chargeTo
}

ElectricCar.prototype.accelerate=function(){
    this.speed+=20;
    this.charge-=1;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}
ElectricCar.prototype.brake = function() {
    this.speed-=35;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const elCar= new ElectricCar ('Tesla',200,80)
elCar.chargeBattery(20);
elCar.accelerate();
elCar.brake()