//Initial data:
let totalAmount = 0;
const prices = [10, 20, 30, 40, 50];
//add 500 to tha total 
totalAmount += 500;
console.log("the total amount after adding 500 is:"+ totalAmount);
//add 1200 to the total
totalAmount += 1200;
console.log("the total amount after adding 1200 is:"+ totalAmount);
//add a 200 discount
totalAmount -= 200;
console.log("the total amount after subtracting 200 is:"+ totalAmount);
//add 18% gst
totalAmount += totalAmount * 0.18;
console.log("the total amount after adding 18% gst is:"+ totalAmount);
//final amount
console.log("the final amount is:"+ totalAmount);