### Regular Expression Matching: Step-by-Step Solution

Given an input string `s` and a pattern `p`, implement regular expression matching with the following capabilities:

*   `.` Matches any single character.
*   `*` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).

#### 1. Understanding the Problem

The difficulty arises from the `*` character, which can match zero or more occurrences. This introduces multiple possibilities that need to be explored.

#### 2. Optimal Approach: Dynamic Programming

This problem can be solved using dynamic programming. Let `dp[i][j]` be a boolean value indicating whether the first `i` characters of `s` (`s[0...i-1]`) match the first `j` characters of `p` (`p[0...j-1]`).

Here is the algorithm:

1.  Create a 2D `dp` table of size `(s.length + 1) x (p.length + 1)`, initialized with `false`.
2.  **Base Case:** `dp[0][0] = true` (empty string matches empty pattern).
3.  **Initialize first row (empty string `s`):**
    -   For `p[j-1] === '*'`, `dp[0][j]` can be `true` if `dp[0][j-2]` is `true` (meaning `*` matches zero occurrences of the preceding element). This handles patterns like `a*`, `a*b*`, `.*` matching an empty string.
4.  Iterate `i` from `1` to `s.length` (for string `s`).
5.  Iterate `j` from `1` to `p.length` (for pattern `p`).
    a. **If `p[j-1]` is `.` or `s[i-1] === p[j-1]`:**
        -   `dp[i][j] = dp[i-1][j-1]` (If the current characters match, the result depends on the match of the previous substrings).
    b. **If `p[j-1]` is `*`:**
        -   **Case 1: `*` matches zero occurrences of the preceding element.**
            -   `dp[i][j] = dp[i][j-2]` (The `*` and its preceding character are effectively ignored).
        -   **Case 2: `*` matches one or more occurrences of the preceding element.**
            -   This is only possible if the preceding character `p[j-2]` matches `s[i-1]` (or `p[j-2]` is `.`).
            -   If `s[i-1]` matches `p[j-2]` (or `p[j-2]` is `.`):
                -   `dp[i][j] = dp[i][j] || dp[i-1][j]` (The `*` matches the current character `s[i-1]`, and the result depends on whether `s[0...i-2]` matches `p[0...j-1]`).

6.  Return `dp[s.length][p.length]`.

This approach has a time complexity of O(len(s) * len(p)) because we fill each cell in the DP table once. The space complexity is O(len(s) * len(p)) for the DP table.

### JavaScript Code Solution

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] will be true if s[0...i-1] matches p[0...j-1]
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Initialize first row (empty string s) for patterns like a*, a*b*, .* etc.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Case 1: Current characters match (or pattern has '.')
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } 
            // Case 2: Pattern has '*'
            else if (p[j - 1] === '*') {
                // Option A: '*' matches zero occurrences of the preceding element
                dp[i][j] = dp[i][j - 2];
                
                // Option B: '*' matches one or more occurrences of the preceding element
                // This is possible if the preceding character matches s[i - 1]
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};
```
