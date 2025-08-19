// MinHeap and MaxHeap Implementations
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

// MedianFinder Class Implementation
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

module.exports = MedianFinder;