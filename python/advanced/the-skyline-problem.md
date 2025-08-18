### The Skyline Problem

A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings in **"key points"** format.

A building `[left, right, height]` has `left` and `right` as the x-coordinates of the two horizontal edges, respectively, and `height` as its height. All three integers are positive.

You may assume all buildings are perfect rectangles standing on a perfectly flat ground at height 0. The skyline should be represented as a list of "key points", where each key point is the left endpoint of a horizontal line segment. The format of a key point is `[x, y]`, where `x` is the x-coordinate and `y` is the height. The last key point on the rightmost building always has a height of 0 and is used to complete the skyline contour.

**Note:**

*   The output list must be sorted by the x-coordinate.
*   The output list must not contain consecutive horizontal segments of equal height. For example, `[2, 3], [4, 5], [7, 5], [10, 5]` is incorrect; the correct output should be `[2, 3], [4, 5], [10, 0]` (assuming there's no building between x=7 and x=10 with height 5).

**Example 1:**

![image](https://assets.leetcode.com/uploads/2020/12/02/skyline1.jpg)

```
Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
```

**Example 2:**

```
Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]
```

**Constraints:**

*   `1 <= buildings.length <= 10^4`
*   `0 <= left_i < right_i <= 2^31 - 1`
*   `1 <= height_i <= 2^31 - 1`
