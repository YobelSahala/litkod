/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }

    let twoStepsBefore = 1;
    let oneStepBefore = 2;

    for (let i = 3; i <= n; i++) {
        const currentWays = oneStepBefore + twoStepsBefore;
        twoStepsBefore = oneStepBefore;
        oneStepBefore = currentWays;
    }

    return oneStepBefore;
};

module.exports = climbStairs;