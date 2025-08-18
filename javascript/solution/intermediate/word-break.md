### Word Break: Step-by-Step Solution

This problem asks whether a given string `s` can be segmented into a space-separated sequence of one or more dictionary words. The same word in the dictionary can be reused.

#### 1. Understanding the Problem

This is a classic dynamic programming problem. It can be thought of as: can `s[0...i]` be segmented if `s[0...j]` is a valid word and `s[j+1...i]` can also be segmented? This recursive structure suggests DP.

#### 2. Dynamic Programming Approach

Let `dp[i]` be a boolean value indicating whether the substring `s[0...i-1]` (i.e., the first `i` characters of `s`) can be segmented into dictionary words.

Here is the algorithm:

1.  Convert `wordDict` into a `Set` for O(1) average time lookups. This is crucial for efficiency.
2.  Create a `dp` array of size `s.length + 1`. Initialize `dp[0]` to `true` (an empty string can always be segmented). Initialize all other `dp[i]` to `false`.
3.  Iterate `i` from `1` to `s.length` (representing the end index of the current substring `s[0...i-1]`):
    a. For each `i`, iterate `j` from `0` to `i - 1` (representing a potential split point).
    b. Check two conditions:
        i. Is `dp[j]` `true`? (meaning the prefix `s[0...j-1]` can be segmented).
        ii. Is the substring `s.substring(j, i)` (from index `j` up to, but not including, `i`) present in `wordDict`?
    c. If both conditions are `true`, then `s[0...i-1]` can be segmented. Set `dp[i] = true` and `break` from the inner loop (no need to check further `j` for this `i`).
4.  After the loops, `dp[s.length]` will contain the answer.

This approach has a time complexity of O(N^2 * L) where N is `s.length` and L is the average length of words in `wordDict` (due to substring creation and dictionary lookup). The space complexity is O(N) for the `dp` array and O(M*K) for the word dictionary set.

### JavaScript Code Solution

```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // Empty string can always be segmented

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            // Check if prefix s[0...j-1] is segmentable (dp[j] is true)
            // AND if the suffix s[j...i-1] is in the word dictionary
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // Once dp[i] is true, no need to check further j's
            }
        }
    }

    return dp[n];
};
```
