
// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/***************************************************************************************************************
 * 
 *  You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *  You want to maximize your profit by choosing a single day to buy one stock and choosing a 
 *  different day in the future to sell that stock.
 * 
 *  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 *  Example 1:
 * 
 *  Input: prices = [7,1,5,3,6,4]
 *  Output: 5
 *  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * 
 *  Example 2:
 * 
 *  Input: prices = [7,6,4,3,1]
 *  Output: 0
 *  Explanation: In this case, no transactions are done and the max profit = 0.
 * 
 *************************************************************************************************************/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;

    let right = 1;

    let left = 0;

    while (right < prices.length) {

        if (prices[right] <= prices[left]) {

            left = right;

        }

        let profit = prices[right] - prices[left];

        maxProfit = Math.max(maxProfit, profit);

        right++;
    }

    return maxProfit;

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    // Where 'n' represents the length of the 'prices' array.
    // The time complexity is O(n) because, the algorithm iterate through the prices array only once, using two pointers (left and right).
    // The space complexity is O(1) because the algorithm don't use any additional data.

};

