// function solution(inputArray) {
//     var prod = inputArray[0] * inputArray[1];
   
//    for (var i = 1; i<inputArray.length - 1;i++) {
//        prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
//    }
   
//    return prod
// }

// BREAK DOWN
let inputArray = [3, 6, -2, -5, 7, 3]
function solution(inputArray) {
    // Initialize prod to the product of the first two elements of inputArray
    var prod = inputArray[0] * inputArray[1];
    
    // Iterate over the elements in inputArray, starting from the second element
    // and ending at the second-to-last element
    for (var i = 1; i<inputArray.length - 1;i++) {
        // Calculate the product of the current element and the next element
        var newProd = inputArray[i] * inputArray[i+1];

        // If the new product is greater than prod, update prod to the new value
        prod = Math.max(prod, newProd);
    }
    
    // Return the final value of prod
    return prod;
}
console.log(prod);
