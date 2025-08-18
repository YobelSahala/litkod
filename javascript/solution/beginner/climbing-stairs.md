### Climbing Stairs: Step-by-Step Solution

This problem is a classic introduction to dynamic programming. It asks for the number of distinct ways to reach the top of a staircase of `n` steps, given you can take either 1 or 2 steps at a time.

#### 1. Understanding the Problem

Let's analyze the base cases:
- To climb 1 step (`n=1`), there is only one way: (1 step).
- To climb 2 steps (`n=2`), there are two ways: (1 step + 1 step) or (2 steps).
- To climb 3 steps (`n=3`), there are three ways: (1+1+1), (1+2), or (2+1).

Notice a pattern? To get to step `n`, you must have come from either step `n-1` (by taking one step) or step `n-2` (by taking two steps). Therefore, the total number of ways to reach step `n` is the sum of the ways to reach step `n-1` and the ways to reach step `n-2`.

`ways(n) = ways(n-1) + ways(n-2)`

This is the Fibonacci sequence!

#### 2. Recursive Approach (with Memoization)

A naive recursive solution would be to directly implement `ways(n) = ways(n-1) + ways(n-2)`. However, this would be very inefficient (O(2^n)) due to recalculating the same subproblems many times. We can optimize this with memoization (storing the results of expensive function calls and returning the cached result when the same inputs occur again).

#### 3. Optimal Approach: Bottom-Up Dynamic Programming

The most efficient way to solve this is to build the solution from the bottom up. We can calculate the number of ways for each step from 1 to `n` and store them.

Here is the algorithm:

1.  Handle the base cases: If `n` is 1, return 1. If `n` is 2, return 2.
2.  We only need to store the results for the previous two steps to calculate the current one. Initialize two variables, `oneStepBefore = 2` (for n=2) and `twoStepsBefore = 1` (for n=1).
3.  Iterate from 3 up to `n`.
    a. In each iteration, calculate `currentWays = oneStepBefore + twoStepsBefore`.
    b. Update the pointers for the next iteration: `twoStepsBefore = oneStepBefore` and `oneStepBefore = currentWays`.
4.  After the loop, `oneStepBefore` will hold the total number of ways for `n` steps.

This approach has a time complexity of O(n) because we iterate from 3 to n once. The space complexity is O(1) because we only use a few variables to store the intermediate results.

### JavaScript Code Solution

```javascript
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
```
