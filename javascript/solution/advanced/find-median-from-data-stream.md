### Find Median from Data Stream: Step-by-Step Solution

This problem asks us to design a data structure that supports adding numbers from a data stream and efficiently finding the median of all elements added so far. The median is the middle value in an ordered list.

#### 1. Understanding the Problem

-   If the list size is odd, the median is the single middle value.
-   If the list size is even, the median is the average of the two middle values.

The challenge is to maintain the median efficiently as numbers are added, without sorting the entire list repeatedly.

#### 2. Optimal Approach: Two Heaps

The most efficient way to solve this problem is by using two heaps:

1.  **Max-Heap (`lowHeap`):** Stores the smaller half of the numbers. The largest element in this heap is the largest among the smaller half.
2.  **Min-Heap (`highHeap`):** Stores the larger half of the numbers. The smallest element in this heap is the smallest among the larger half.

By maintaining these two heaps, the median will always be either the top of the max-heap (if total count is odd) or the average of the tops of both heaps (if total count is even).

**Key Invariants to Maintain:**
-   All elements in `lowHeap` are less than or equal to all elements in `highHeap`.
-   The size difference between `lowHeap` and `highHeap` is at most 1.

**JavaScript Specifics:** JavaScript does not have built-in heap data structures. For a real-world or competitive programming scenario, you would typically implement a custom `MinHeap` and `MaxHeap` class or use a library. For this explanation, we'll assume the existence of `MinHeap` and `MaxHeap` classes with `add`, `peek`, and `extractMin/Max` methods.

Here is the algorithm:

**`addNum(num)`:**
1.  **Add `num` to the correct heap:**
    -   If `num` is less than or equal to the top of `lowHeap` (or `lowHeap` is empty), add `num` to `lowHeap`.
    -   Else, add `num` to `highHeap`.
2.  **Balance the heaps:** After adding, ensure the size difference is at most 1.
    -   If `lowHeap.size > highHeap.size + 1`, move the largest element from `lowHeap` to `highHeap`.
    -   If `highHeap.size > lowHeap.size`, move the smallest element from `highHeap` to `lowHeap`.

**`findMedian()`:**
1.  If `lowHeap.size === highHeap.size` (even number of elements), the median is `(lowHeap.peek() + highHeap.peek()) / 2.0`.
2.  Else (odd number of elements), the median is `lowHeap.peek()`.

This approach has a time complexity of O(log n) for `addNum` (due to heap operations) and O(1) for `findMedian`. The space complexity is O(n) to store all numbers in the heaps.

### JavaScript Code Solution

```javascript
// --- MinHeap and MaxHeap Implementations (Conceptual) ---
// In a real scenario, you'd use a robust implementation or a library.
// For demonstration, these are simplified.

class MinHeap {
    constructor() {
        this.heap = [];
    }

    add(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    peek() {
        return this.heap[0];
    }

    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._bubbleDown();
        }
        return min;
    }

    get size() {
        return this.heap.length;
    }

    _bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    _bubbleDown() {
        let index = 0;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== index) {
                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
                index = smallestIndex;
            } else {
                break;
            }
        }
    }
}

class MaxHeap extends MinHeap {
    add(val) {
        super.add(-val);
    }

    peek() {
        return -super.peek();
    }

    extractMax() {
        return -super.extractMin();
    }
}

// --- MedianFinder Class Implementation ---
var MedianFinder = function() {
    this.lowHeap = new MaxHeap();  // Stores smaller half
    this.highHeap = new MinHeap(); // Stores larger half
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // Add to lowHeap (max-heap) first
    this.lowHeap.add(num);

    // Balance: largest from lowHeap should go to highHeap
    // if lowHeap is not empty and its top (largest element) is greater than highHeap's top
    if (this.lowHeap.size > 0 && this.highHeap.size > 0 && this.lowHeap.peek() > this.highHeap.peek()) {
        this.highHeap.add(this.lowHeap.extractMax());
    }

    // Balance sizes: lowHeap can have at most 1 more element than highHeap
    if (this.lowHeap.size > this.highHeap.size + 1) {
        this.highHeap.add(this.lowHeap.extractMax());
    } else if (this.highHeap.size > this.lowHeap.size) {
        this.lowHeap.add(this.highHeap.extractMin());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.lowHeap.size === this.highHeap.size) {
        // Even number of elements, median is average of two middle elements
        return (this.lowHeap.peek() + this.highHeap.peek()) / 2.0;
    } else {
        // Odd number of elements, median is the top of the lowHeap
        return this.lowHeap.peek();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```
