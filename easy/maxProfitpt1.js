'use strict'

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

/*

//Code is incorrect, but was interesting to write

var maxProfit = function (prices) {
    //Using spread syntax allows us to not mutate the original array
    const low = [...prices].sort((a, b) => a - b)[0];
    const lowIndex = prices.indexOf(low)
    let high = low;
    for (let i = lowIndex; i <= prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            high = prices[i + 1]
        }
    }
    return high - low;
};

const num1 = [2, 4, 1]

console.log(maxProfit(num1));
*/

//Second Attempt

/*
var maxProfit = function (prices) {
    let low = prices[0];
    let high = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] <= low) {
            low = prices[i + 1];
            console.log("yuh")
        }

        else if (prices[i + 1] >= low) {
            high = prices[i + 1]
        }
    }
    console.log(high)
    console.log(low)
    return high - low;
};

*/


//Third Attempt (Brute force) Didn't work due to time exceeded

/*
var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > profit) {
                profit = prices[j] - prices[i]
            }
        }
    }
    return profit;
}


*/

//Solution

var maxProfit = function (prices) {
    let profit = 0;
    let i = 0;
    let j = 1;
    while (j < prices.length) {
        if (prices[i] < prices[j]) {
            let newProfit = prices[j] - prices[i]
            profit = Math.max(newProfit, profit);
        }
        else i = j
        j++;
    }
    return profit;
}

const num1 = [2, 4, 1]

console.log(maxProfit(num1));