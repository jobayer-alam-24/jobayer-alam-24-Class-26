// a. Write a function to find the sum of all elements in an array
function sumOfArrayElements(){
    const myArray = [23, 43, 32, 34, 42, 54, 55];
    let sum = 0;
    console.log(myArray.join(", "));
    for(let i of myArray){
        sum += i;
    }
    return sum;
}
let result1 = sumOfArrayElements(); 
console.log("Sum of Above Array Elements: " + result1);

// b. Create a 2D array and write a function to compute the sum of each row and each column.
let twodArray = function(){
    const myArray = [
        [2, 4, 6, 8, 1], //i = 1
        [1, 3, 5, 7, 9], //i = 2
        [24, 46, 68, 3], //i = 3
        [13, 35, 57, 7]  //i = 4    => (length)
    ];
    for(let row of myArray){
        console.log(row.join(' '));
    }

    console.log("--------------------------------");

    let firstRow = `First row: ${myArray[0].join(' ')}`;
    console.log(firstRow);

    let col = [];
    for(let i = 0; i < myArray.length; i++) {
        col.push(myArray[i][0]);
    }
   console.log(`First col: ${col.join(' ')}`);
}
twodArray();

// c. sum of 2D arrays 
let sumOfTwoDArray = function(){
    const myArray1 = [
        [2, 4, 6, 8, 1], 
        [1, 3, 5, 7, 9], 
        [24, 46, 68, 3], 
        [13, 35, 57, 7]  
    ];
    const myArray2 = [
        [2, 4, 6, 8, 1], 
        [1, 3, 5, 7, 9], 
        [24, 46, 68, 3], 
        [13, 35, 57, 7]  
    ];

    console.log("Array 1:")
    for(let i of myArray1){
        console.log(i.join(' '))
    }
    console.log("Array 2:")
    for(let i of myArray2){
        console.log(i.join(' '))
    }

    let oneD1 = myArray1.flat();
    let oneD2 = myArray2.flat();
    console.log(oneD1.concat(oneD2));
}
sumOfTwoDArray();

// d. Create an object representing a car with properties like make, model, year
let myObj = function(){
    const car = {
        carName: "Toyota",
        carModel: "CHR",
        year: 1998,
        isDreamCar: true
    };
    console.log(car);
    console.log(`${car.carName} is my Favourite Car which is belong to ${car.carModel}. The company was founded is ${car.year}`);
    for(let i in car){
        console.log(`${i}: ${car[i]}`);
    }
}
myObj();