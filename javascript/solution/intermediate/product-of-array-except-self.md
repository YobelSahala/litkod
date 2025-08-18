### Product of Array Except Self: Step-by-Step Solution

This problem asks us to return an array `answer` where `answer[i]` is the product of all elements in `nums` *except* `nums[i]`. The constraints are crucial: `O(n)` time complexity and no division operation.

#### 1. Understanding the Problem

For an element `nums[i]`, its `answer[i]` is the product of all elements to its left multiplied by the product of all elements to its right.

`answer[i] = (product of nums[0]...nums[i-1]) * (product of nums[i+1]...nums[n-1])`

#### 2. Optimal Approach: Two Pass (Prefix and Suffix Products)

This problem can be solved efficiently by calculating prefix products and suffix products separately.

1.  **Prefix Products:** Create an array `prefixProducts` where `prefixProducts[i]` stores the product of all elements from `nums[0]` to `nums[i-1]`. Initialize `prefixProducts[0] = 1`.
2.  **Suffix Products:** Create an array `suffixProducts` where `suffixProducts[i]` stores the product of all elements from `nums[i+1]` to `nums[n-1]`. Initialize `suffixProducts[n-1] = 1`.

Here is the algorithm:

1.  Initialize an `answer` array of the same size as `nums`, filled with `1`s.
2.  **First Pass (Calculate Prefix Products):**
    - Initialize a variable `prefixProduct = 1`.
    - Iterate from `i = 0` to `n - 1`:
        - Set `answer[i] = prefixProduct` (this stores the product of elements to the left of `nums[i]`).
        - Update `prefixProduct = prefixProduct * nums[i]`.
3.  **Second Pass (Calculate Suffix Products and Final Answer):**
    - Initialize a variable `suffixProduct = 1`.
    - Iterate from `i = n - 1` down to `0`:
        - Multiply `answer[i]` (which currently holds the prefix product) by `suffixProduct` (this adds the product of elements to the right of `nums[i]`).
        - Update `suffixProduct = suffixProduct * nums[i]`.
4.  Return `answer`.

This approach has a time complexity of O(n) because we make two passes through the array. The space complexity is O(1) if we consider the output array as not extra space (as per common interview conventions), or O(n) if we count the output array.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // Calculate prefix products
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Calculate suffix products and combine with prefix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return answer;
};
```
