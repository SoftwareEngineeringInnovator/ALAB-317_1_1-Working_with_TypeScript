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
    start(): void {
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

// Part 6: Generic NCycle Class
// This class will use a generic type, the <T> can be string, number, or another type
class NCycle<T> {

    // status shall be "started" or "stopped".
    status: "started" | "stopped" = "stopped";

    // make and model can be one value of type T or an array of type T.
    make: T | T[];
    model: T | T[];
    wheels: number;

    // The constructor receives the make, the model, and the wheels to create a new NCycle.
    constructor(make: T | T[], model: T | T[], wheels: number) {
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }

    print(indexNumber: number = 0): void {

        // If make and model are NOT arrays, print the below message.
        if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
        // If make and model are arrays AND both have an item at the indexNumber, print that pair.
        else if (
            Array.isArray(this.make) &&
            Array.isArray(this.model) &&
            this.make[indexNumber] !== undefined &&
            this.model[indexNumber] !== undefined
        ) {
            console.log(`This NCycle has a ${this.make[indexNumber]} ${this.model[indexNumber]} at ${indexNumber}.`);
        }
        // If neither condition works, the NCycle was not created properly.
        else {
            console.log("This NCycle was not created properly.");
        }
    }

    // printAll method prints all matching make/model pairs.
    printAll(): void {

        // First we check that make and model are both arrays.
        if (Array.isArray(this.make) && Array.isArray(this.model)) {
            
            // Get the smaller length so we only print matching pairs.
            const smallerLength = Math.min(this.make.length, this.model.length);

            // If there are no matching pairs, print an error message.
            if (smallerLength === 0) {
                console.log("This NCycle was not created properly.");
                return;
            }

            // Loop through each matching pair and print it.
            for (let i = 0; i < smallerLength; i++) {
                console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
            }
        }
        // If make and model are not arrays, print the simple message.
        else if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
            console.log(`This is a ${this.make} ${this.model} NCycle.`);
        }
        // If one is an array and the other is not, the object was not created properly.
        else {
            console.log("This NCycle was not created properly.");
        }
    }
}

// Testing NCycle

// Test Number values
const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print();
testCycle1.printAll();

// Test String values
const testCycle2 = new NCycle<string>("This", "That", 4);
testCycle2.print();
testCycle2.printAll();

// Test String values again
const testCycle3 = new NCycle<string>("Make", "10", 4);
testCycle3.print(4);
testCycle3.printAll();

// Test String arrays
const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];

const testCycle4 = new NCycle<string>(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();

// Test Number arrays with different lengths
const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];

const testCycle5 = new NCycle<number>(makes5, models5, 0);
testCycle5.print(7);
testCycle5.printAll();