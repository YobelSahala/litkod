/**
 * Helper function: Finds the area of the largest rectangle in a histogram.
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

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // heights array will store the current histogram for each row
    const heights = new Array(cols).fill(0);
    let maxOverallArea = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === '1') {
                heights[c]++; // Extend the bar upwards
            } else {
                heights[c] = 0; // Reset the bar if '0' is encountered
            }
        }
        
        // Calculate the largest rectangle area for the current histogram (heights array)
        maxOverallArea = Math.max(maxOverallArea, largestRectangleArea(heights));
    }

    return maxOverallArea;
};

module.exports = maximalRectangle;