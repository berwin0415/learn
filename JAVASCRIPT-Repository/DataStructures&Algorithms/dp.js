const maxProfit = function (prices) {
  const n = prices.length;
  const k = 4;
  const dp = Array.from(new Array(n), () =>
    Array.from(new Array(k + 1), () => new Array(2).fill(0))
  );
  if (n === 0) {
    return 0;
  }
  for (let i = 0; i < n; i++) {
    for (let j = k; j >= 1; j--) {
      if (i === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }
      dp[i][j][0] = Math.max(
        dp[i - 1][j][0],
        dp[i - 1][j][1] + parseInt(prices[i])
      );
      dp[i][j][1] = Math.max(
        dp[i - 1][j][1],
        dp[i - 1][j - 1][0] - parseInt(prices[i])
      );
    }
  }
  console.log(dp);
  return dp[n - 1][k][0];
};

console.log(maxProfit([7, 1, 5, 6, 4, 3]));
