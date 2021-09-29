class Vehicle
{
    //Constructor
    constructor(make,model,year)
    {
        //Initalise Variables
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        //Log information
            console.log(`Make: ${this.make}`);
            console.log(`Model: ${this.model}`);
            console.log(`Year: ${this.year}`);
    }
}
//Instance of Vehicle - Send my data in
let myVehicle = new Vehicle("Ford","Focus",2008);
// Envolkes Information Method - Checking if Data works
myVehicle.Information();

class Car extends Vehicle{
    //Constructor
    constructor(make,model,year,doors){
        //Pass to parent
        super(make,model,year);
        this.doors = doors;
    }
    //Log Parent + Child Info
    Information(){
        //Get Parent class by superclass
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
//Instance of Car - Send in data
let myCar = new Car("VW","Polo",2021,5);
//Print Car info.
myCar.Information();