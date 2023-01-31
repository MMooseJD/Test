/*
Function that accepts a positive number and returns it the next larger number formed from the same digits.

Tests:
biggerNumber(23) // 32;
biggerNumber(624) // 642;
biggerNumber(2018) // 8210;
If there is no greater number, return -1
biggerNumber(9) = -1;
biggerNumber(111) = -1;
biggerNumber(531) = -1;


*/

function biggerNumber(num) {
    // Convert the input number to a string
    let strNum = num.toString();
    
    // Initialize a flag to indicate if a next larger number has been found
    let found = false;
    
    // Loop through the digits of the string in reverse order
    for (let i = strNum.length - 1; i > 0; i--) {
        // Find the first digit that is smaller than the next digit
        if (strNum[i - 1] < strNum[i]) {
            // Swap this digit with the smallest digit that is greater than it, among the digits to the right
            let minIdx = i;
            for (let j = i + 1; j < strNum.length; j++) {
                if (strNum[j] > strNum[i - 1] && strNum[j] < strNum[minIdx]) {
                    minIdx = j;
                }
            }
            [strNum[i - 1], strNum[minIdx]] = [strNum[minIdx], strNum[i - 1]];
            
            // Reverse the order of the digits to the right of the current digit to get the smallest possible number
            let end = strNum.slice(i).split('').sort().join('');
            strNum = strNum.slice(0, i) + end;
            
            // Set the flag to indicate that a next larger number has been found
            found = true;
            
            // Break the loop
            break;
        }
    }
    
    // If a next larger number has been found, return it as a number, otherwise return -1
    return found ? +strNum : -1;
}


const resultado = biggerNumber(23);


console.log(resultado);