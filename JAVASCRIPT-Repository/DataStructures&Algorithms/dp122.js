const maxProfit = function (prices) {
  const n = prices.length;
  const dp = Array.from(new Array(n), () => new Array(2).fill(0));
  if (n === 0) {
    return 0;
  }
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + parseInt(prices[i]));
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - parseInt(prices[i]));
  }
  return dp[n - 1][0];
};

console.log(maxProfit([7, 1, 5, 3, 6, 3]));
