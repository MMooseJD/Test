/*

There is a certain queue in a supermarket with the possibility of self-service.
Task: write a function that calculates the total time required to serve all people.
The function takes two arguments:
1- Customers, an array of positive numbers representing the number of people in line. Every number indicates the amount of time required to serve one customer.
	2-The number of cash registers, a positive number.

The function should return a number, how much time is required in total.
There is only one queue.
The queue order never changes.
We assume that the first person approaches the cash register as soon as it is freed.

Explanation:
queueTime([5,3,4], 1)
3 customers that require 5, 3 and 4 minutes respectively and 1 checkout
Output: 12 (5 + 3 + 4)

queueTime([10, 2, 3, 3], 2)
4 customers that require 10, 2, 3 and 3 minutes respectively and 2 checkout
Output: 10

queueTime([], 1); - no customers, 1 каса
Output: 0

Tests:
queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1) // 418

queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4) // 162

queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5) // 65



*/



function queueTime(customers, registers) {
    // Create an array of cashier queues with specified size
    let queue = new Array(registers).fill(0);

    // Iterate through each customer in line
    for (let i = 0; i < customers.length; i++) {
      // Find the cashier queue with minimum waiting time
    let minIndex = queue.indexOf(Math.min(...queue));
      // Increase the waiting time at the cashier queue for the current customer
    queue[minIndex] += customers[i];
    }

    // Return the maximum waiting time at a cashier queue
    return Math.max(...queue);
}


const resultado = queueTime([5,3,4], 1);

console.log(resultado);