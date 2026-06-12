//@ts-check
// interface iVehicle {
//     status:  "stopped" |"started",
//     make: string,
//     model: string,
//     wheels: string | number,

//     start: ()=>{},
//     stop: ()=>{}
// }
class Vehicle {
    status = "stopped";
    make: string;
    model: string;
    wheels: string | number;

    constructor(make: string, model: string, wheels: string | number) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class NCycle<T> {
    status = "stopped";
    make: string | [];
    model: string | [];
    wheels: string | number;

    constructor(make: string | [], model: string | [], wheels: string | number) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class Car extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, "4");
    }
}

class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, 2);
    }
}

function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "running") {
        console.log("The vehicle is running.");
    } else {
        console.log("The vehicle is stopped.");
    }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = Number(myBuick.wheels) - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);



printNCycle(8);



function printNCycle(num: Number = 0) {
    const myNCycle = new NCycle("Harley-Davidson", "Low Rider S", 5);
    //console.log("The printNCycle.", num);
    if (myNCycle.status === "running") {
        console.log("The vehicle is running.");
    } else {
        console.log("The vehicle is stopped.");
    }
}