/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = []; // Stores indices of bars in increasing order of height
    let maxArea = 0;
    const n = heights.length;

    // Iterate one past the end to clear the stack with a virtual bar of height 0
    for (let i = 0; i <= n; i++) {
        const currentHeight = (i === n) ? 0 : heights[i];

        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()]; // Height of the bar being popped
            
            // Calculate width: if stack is empty, it means this bar extends to the beginning
            // otherwise, it extends from stack[stack.length - 1] + 1 to i - 1
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, h * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
};

module.exports = largestRectangleArea;