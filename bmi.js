class BMI
{
    //Constructor taking 2 arguments(h,w)
    constructor(height,weight){
        //Variables Initalised
        this.height = height;
        this.weight = weight;
    }

    //Method for calculating BMI
    calculateBMI(){
        //Forumla to calculate BMI
        let bmi = this.weight/(this.height**2);
        //get result
        return bmi; 
    }
}

//Instance of BMI - Send my data in
let myBMI = new BMI(2,90);
// Envolkes CalcBMI Method
let calc = myBMI.calculateBMI();
//Print result to user
console.log(calc);