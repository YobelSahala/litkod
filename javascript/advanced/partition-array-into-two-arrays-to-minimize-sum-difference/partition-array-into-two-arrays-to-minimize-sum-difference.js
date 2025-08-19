/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {
    const n = nums.length / 2;
    const totalSum = nums.reduce((acc, val) => acc + val, 0);

    const numsLeft = nums.slice(0, n);
    const numsRight = nums.slice(n);

    // sumsLeft[k] will store sums of subsets of size k from numsLeft
    const sumsLeft = Array(n + 1).fill(0).map(() => []);
    const sumsRight = Array(n + 1).fill(0).map(() => []);

    // Helper function to generate sums using backtracking
    function generateSums(arr, index, currentSum, count, targetSums) {
        if (index === arr.length) {
            targetSums[count].push(currentSum);
            return;
        }

        // Include current element
        generateSums(arr, index + 1, currentSum + arr[index], count + 1, targetSums);
        // Exclude current element
        generateSums(arr, index + 1, currentSum, count, targetSums);
    }

    generateSums(numsLeft, 0, 0, 0, sumsLeft);
    generateSums(numsRight, 0, 0, 0, sumsRight);

    // Sort sumsRight lists for binary search
    for (let i = 0; i <= n; i++) {
        sumsRight[i].sort((a, b) => a - b);
    }

    let minDiff = Infinity;

    // Iterate through possible number of elements from left half (k)
    for (let k = 0; k <= n; k++) {
        // We need to pick (n - k) elements from the right half
        const targetKRight = n - k;

        if (sumsRight[targetKRight].length === 0) {
            continue;
        }

        for (const sumL of sumsLeft[k]) {
            // We want sumL + sumR to be close to totalSum / 2
            // So, sumR should be close to (totalSum / 2) - sumL
            const targetSumR = (totalSum / 2) - sumL;

            // Use binary search to find sumR in sumsRight[targetKRight]
            // that is closest to targetSumR
            let low = 0;
            let high = sumsRight[targetKRight].length - 1;
            let idx = -1;

            while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (sumsRight[targetKRight][mid] >= targetSumR) {
                    idx = mid;
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }

            // Check idx and idx-1 for closest sumR
            if (idx !== -1) {
                let currentSum1 = sumL + sumsRight[targetKRight][idx];
                minDiff = Math.min(minDiff, Math.abs(2 * currentSum1 - totalSum));
            }
            
            if (idx > 0) {
                let currentSum1 = sumL + sumsRight[targetKRight][idx - 1];
                minDiff = Math.min(minDiff, Math.abs(2 * currentSum1 - totalSum));
            }
        }
    }

    return minDiff;
};

module.exports = minimumDifference;