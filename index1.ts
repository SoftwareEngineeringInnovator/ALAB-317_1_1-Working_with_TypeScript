//@ts-check
// interface iVehicle {
//     status:  "stopped" |"started",
//     make: string,
//     model: string,
//     wheels: string | number,

//     start: ()=>{},
//     stop: ()=>{}
// }

// Part 1: Vehicle Class
// This class is the parent class, Car and MotorCycle will inherit from this class.
class Vehicle {
    
    // status shall be "started" or "stopped".
    status: "started" | "stopped" = "stopped";

    // Define the type by using make for the brand, then the model of thevehicle with model and finally the wheels
    make: string;
    model: string;
    wheels: string | number;

    // The constructor is used to define a new vehicle
    constructor(make: string, model: string, wheels: string | number) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }

    // The below methods will change the status to "started" or "stopped"
    start(): void{
        this.status = "started";
    }
    stop(): void {
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

// Part 2: Print Vehicle Status
// This function display the vehicle status
function printStatus(vehicle: Vehicle): void {
    if (vehicle.status === "started") {
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

    print(num?: Number): void {

        if (typeof this.make == "string" && typeof this.model == "string") {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        } else if (Array.isArray(this.make) && Array.isArray(this.model)) {
            console.log(`This NCycle has a ${this.make} ${this.model} at ${num}.`);
        } else {
            console.log("This NCycle was not created properly.");
        }
    }

    printAll(): void {

        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            console.log(`This NCycle has a ${this.make} ${this.model} NCycle.`);
        } else {
            console.log("This NCycle was not created properly.");
        }
    }
}

const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();

const testCycle3 = new NCycle<string>("Make", "10", 4);
testCycle3.print(4);
testCycle3.printAll();