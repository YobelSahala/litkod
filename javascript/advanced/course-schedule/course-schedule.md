### Course Schedule: Step-by-Step Solution

This problem asks whether it's possible to finish all courses given a list of prerequisites. This is a classic graph problem that can be modeled as detecting a cycle in a directed graph. If a cycle exists, it's impossible to complete all courses.

#### 1. Understanding the Problem as a Graph

-   **Nodes:** Each course is a node in the graph.
-   **Edges:** A prerequisite `[a, b]` means there's a directed edge from `b` to `a` (you must take `b` before `a`).
-   **Goal:** Determine if the graph contains a cycle.

#### 2. Optimal Approach: DFS with Cycle Detection

We can use Depth-First Search (DFS) to detect cycles in a directed graph. During DFS, we need to keep track of the state of each node:

-   **`unvisited` (0):** Node has not been visited yet.
-   **`visiting` (1):** Node is currently in the recursion stack (part of the current DFS path).
-   **`visited` (2):** Node has been completely visited and all its descendants have been processed.

Here is the algorithm:

1.  **Build Adjacency List:** Create an adjacency list `adj` where `adj[course]` contains a list of courses that have `course` as a prerequisite.
2.  **Initialize `visitedState` array:** Create an array `visitedState` of size `numCourses`, initialized to `0` (unvisited).
3.  **Iterate through courses:** For each `course` from `0` to `numCourses - 1`:
    a. If `visitedState[course]` is `0` (unvisited), start a DFS from this course.
    b. Define a recursive DFS function, `dfs(course)`:
        i. Set `visitedState[course] = 1` (mark as visiting).
        ii. For each `neighbor` in `adj[course]`:
            -   If `visitedState[neighbor]` is `1` (visiting), it means we found a back edge to a node currently in the recursion stack, indicating a **cycle**. Return `false`.
            -   If `visitedState[neighbor]` is `0` (unvisited), recursively call `dfs(neighbor)`. If this call returns `false` (meaning a cycle was found deeper in the recursion), propagate `false` up.
        iii. Set `visitedState[course] = 2` (mark as visited).
        iv. Return `true`.
    c. If `dfs(course)` returns `false`, then a cycle was found, and it's impossible to finish all courses. Return `false`.
4.  If the loop completes without finding any cycles, it means all courses can be finished. Return `true`.

This approach has a time complexity of O(V + E), where V is the number of courses (vertices) and E is the number of prerequisites (edges), because each vertex and edge is visited once. The space complexity is O(V + E) for the adjacency list and recursion stack.

#### 3. Optimal Approach: Kahn's Algorithm (BFS for Topological Sort)

Kahn's algorithm uses BFS to perform a topological sort. If a topological sort can be completed (i.e., all nodes are included in the sort), then there is no cycle. If some nodes are left out, it means they are part of a cycle.

1.  **Build Adjacency List and In-degrees:**
    -   Create an adjacency list `adj`.
    -   Create an `inDegree` array of size `numCourses`, initialized to `0`. `inDegree[course]` stores the number of prerequisites for `course`.
    -   Populate `adj` and `inDegree` from `prerequisites`.
2.  **Initialize Queue:** Add all courses with an `inDegree` of `0` to a queue.
3.  **BFS Traversal:**
    -   Initialize `coursesTaken = 0`.
    -   While the queue is not empty:
        a. Dequeue a `course`.
        b. Increment `coursesTaken`.
        c. For each `neighbor` of `course` (courses that depend on `course`):
            i. Decrement `inDegree[neighbor]`.
            ii. If `inDegree[neighbor]` becomes `0`, enqueue `neighbor`.
4.  If `coursesTaken === numCourses`, it means all courses can be finished. Return `true`.
5.  Else, a cycle exists. Return `false`.

This approach also has a time complexity of O(V + E) and a space complexity of O(V + E).

### JavaScript Code Solution

```javascript
// --- DFS with Cycle Detection ---
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinishDFS = function(numCourses, prerequisites) {
    const adj = new Array(numCourses).fill(0).map(() => []);
    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course);
    }

    // 0: unvisited, 1: visiting (in current path), 2: visited (processed)
    const visitedState = new Array(numCourses).fill(0);

    function dfs(course) {
        if (visitedState[course] === 1) { // Cycle detected
            return false;
        }
        if (visitedState[course] === 2) { // Already visited and processed
            return true;
        }

        visitedState[course] = 1; // Mark as visiting

        for (const neighbor of adj[course]) {
            if (!dfs(neighbor)) {
                return false;
            }
        }

        visitedState[course] = 2; // Mark as visited
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
};

// --- Kahn's Algorithm (BFS for Topological Sort) ---
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinishKahn = function(numCourses, prerequisites) {
    const adj = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let coursesTaken = 0;
    while (queue.length > 0) {
        const course = queue.shift();
        coursesTaken++;

        for (const neighbor of adj[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return coursesTaken === numCourses;
};
```