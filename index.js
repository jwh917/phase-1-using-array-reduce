const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function sum(num1, num2) {
    return num1 + num2;
  }  

let totalBatteries = batteryBatches.reduce(sum, 0);
console.log(totalBatteries);