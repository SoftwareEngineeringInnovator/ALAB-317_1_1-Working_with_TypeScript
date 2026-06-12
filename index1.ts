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

// Part 3: Car Class
// Car extends Vehicle, so it gets make, model, wheels, status, start(), and stop().
class Car extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model, "4");
    }
}

// Part 4: MotorCycle Class
// MotorCycle extends vehicle, so it gets make, model, wheels, status, start(), and stop().
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

// Part 5: Testing Vehicle, Car, and MotorCycle

// Create a new MotorCycle object.
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");

// Motorcycle starts.
myHarley.start();

// Displays the motorcycle status and the make of the motorcycle.
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

// Create a new Car object.
const myBuick = new Car("Buick", "Regal");

// Car starts.
myBuick.start();

// Displays the car status and the make of the motorcycle.
printStatus(myBuick);
console.log(myBuick.make.toUpperCase());

// Convert wheels to a number, subtract 1, and save the new value.
myBuick.wheels = Number(myBuick.wheels) - 1;
console.log("Car Number of wheels is:", myBuick.wheels);
console.log("Car Model:", myBuick.model);

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