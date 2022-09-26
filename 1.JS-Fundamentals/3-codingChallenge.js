let markProps = {
    name: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.marksBMI = (this.weight / (this.height * this.height)).toFixed(1)
        return this.marksBMI
    }
}
let johnProps = {
    name: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.johnsBMI = (this.weight / (this.height * this.height)).toFixed(1)
        return this.johnsBMI
    }
}

console.log(`John Smith's BMI (${johnProps.calcBMI()}) ${johnProps.calcBMI() > markProps.calcBMI() ? 'is' : 'is not'} higher than Mark's (${markProps.calcBMI()})!`)



// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem, createanobjectwithpropertiesfortheirfullname, mass, and height(Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects).Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI, togetherwiththefullnameandthe respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀