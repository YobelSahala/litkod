### Find Median from Data Stream: Step-by-Step Solution

This problem asks us to design a data structure that supports adding numbers from a data stream and efficiently finding the median of all elements added so far. The median is the middle value in an ordered list.

#### 1. Understanding the Problem

- If the list size is odd, the median is the single middle value.
- If the list size is even, the median is the average of the two middle values.

The challenge is to maintain the median efficiently as numbers are added, without sorting the entire list repeatedly.

#### 2. Optimal Approach: Two Heaps

The most efficient way to solve this problem is by using two heaps:

1.  **Max-Heap (`low_heap`):** Stores the smaller half of the numbers. The largest element in this heap is the largest among the smaller half.
2.  **Min-Heap (`high_heap`):** Stores the larger half of the numbers. The smallest element in this heap is the smallest among the larger half.

By maintaining these two heaps, the median will always be either the top of the max-heap (if total count is odd) or the average of the tops of both heaps (if total count is even).

**Key Invariants to Maintain:**
- All elements in `low_heap` are less than or equal to all elements in `high_heap`.
- The size difference between `low_heap` and `high_heap` is at most 1.

Here is the algorithm:

**`addNum(num)`:**
1.  **Add `num` to the correct heap:**
    - If `low_heap` is empty or `num <= -low_heap[0]` (remember `low_heap` stores negative values for max-heap behavior), push `num` to `low_heap`.
    - Else, push `num` to `high_heap`.
2.  **Balance the heaps:** After adding, ensure the size difference is at most 1.
    - If `len(low_heap) > len(high_heap) + 1`, move the largest element from `low_heap` to `high_heap`.
    - If `len(high_heap) > len(low_heap)`, move the smallest element from `high_heap` to `low_heap`.

**`findMedian()`:**
1.  If `len(low_heap) == len(high_heap)` (even number of elements), the median is `(-low_heap[0] + high_heap[0]) / 2.0`.
2.  Else (odd number of elements), the median is `-low_heap[0]`.

**Python Specifics:** Python's `heapq` module implements a min-heap. To use it as a max-heap, insert negative values.

This approach has a time complexity of O(log n) for `addNum` (due to heap operations) and O(1) for `findMedian`. The space complexity is O(n) to store all numbers in the heaps.

### Python Code Solution

```python
import heapq

class MedianFinder:

    def __init__(self):
        # max_heap (stores smaller half, use negative values for max-heap behavior)
        self.low_heap = [] 
        # min_heap (stores larger half)
        self.high_heap = []

    def addNum(self, num: int) -> None:
        # Add to low_heap (max-heap) first
        heapq.heappush(self.low_heap, -num)

        # Balance: largest from low_heap should go to high_heap
        # if low_heap is not empty and its top (largest element) is greater than high_heap's top
        if self.low_heap and self.high_heap and (-self.low_heap[0] > self.high_heap[0]):
            val = -heapq.heappop(self.low_heap)
            heapq.heappush(self.high_heap, val)

        # Balance sizes: low_heap can have at most 1 more element than high_heap
        if len(self.low_heap) > len(self.high_heap) + 1:
            val = -heapq.heappop(self.low_heap)
            heapq.heappush(self.high_heap, val)
        elif len(self.high_heap) > len(self.low_heap):
            val = heapq.heappop(self.high_heap)
            heapq.heappush(self.low_heap, -val)

    def findMedian(self) -> float:
        if len(self.low_heap) == len(self.high_heap):
            # Even number of elements, median is average of two middle elements
            return (-self.low_heap[0] + self.high_heap[0]) / 2.0
        else:
            # Odd number of elements, median is the top of the low_heap
            return float(-self.low_heap[0])


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
```
