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
2.  **Initialize `visited_state` array:** Create an array `visited_state` of size `numCourses`, initialized to `0` (unvisited).
3.  **Iterate through courses:** For each `course` from `0` to `numCourses - 1`:
    a. If `visited_state[course]` is `0` (unvisited), start a DFS from this course.
    b. Define a recursive DFS function, `dfs(course)`:
        i. Set `visited_state[course] = 1` (mark as visiting).
        ii. For each `neighbor` in `adj[course]`:
            - If `visited_state[neighbor]` is `1` (visiting), it means we found a back edge to a node currently in the recursion stack, indicating a **cycle**. Return `False`.
            - If `visited_state[neighbor]` is `0` (unvisited), recursively call `dfs(neighbor)`. If this call returns `False` (meaning a cycle was found deeper in the recursion), propagate `False` up.
        iii. Set `visited_state[course] = 2` (mark as visited).
        iv. Return `True`.
    c. If `dfs(course)` returns `False`, then a cycle was found, and it's impossible to finish all courses. Return `False`.
4.  If the loop completes without finding any cycles, it means all courses can be finished. Return `True`.

This approach has a time complexity of O(V + E), where V is the number of courses (vertices) and E is the number of prerequisites (edges), because each vertex and edge is visited once. The space complexity is O(V + E) for the adjacency list and recursion stack.

#### 3. Optimal Approach: Kahn's Algorithm (BFS for Topological Sort)

Kahn's algorithm uses BFS to perform a topological sort. If a topological sort can be completed (i.e., all nodes are included in the sort), then there is no cycle. If some nodes are left out, it means they are part of a cycle.

1.  **Build Adjacency List and In-degrees:**
    - Create an adjacency list `adj`.
    - Create an `in_degree` array of size `numCourses`, initialized to `0`. `in_degree[course]` stores the number of prerequisites for `course`.
    - Populate `adj` and `in_degree` from `prerequisites`.
2.  **Initialize Queue:** Add all courses with an `in_degree` of `0` to a queue.
3.  **BFS Traversal:**
    - Initialize `courses_taken = 0`.
    - While the queue is not empty:
        a. Dequeue a `course`.
        b. Increment `courses_taken`.
        c. For each `neighbor` of `course` (courses that depend on `course`):
            i. Decrement `in_degree[neighbor]`.
            ii. If `in_degree[neighbor]` becomes `0`, enqueue `neighbor`.
4.  If `courses_taken == numCourses`, it means all courses can be finished. Return `True`.
5.  Else, a cycle exists. Return `False`.

This approach also has a time complexity of O(V + E) and a space complexity of O(V + E).

### Python Code Solution

```python
from collections import defaultdict, deque

# --- DFS with Cycle Detection ---
def can_finish_dfs(numCourses, prerequisites):
    """
    Determines if all courses can be finished using DFS for cycle detection.

    Args:
      numCourses: Total number of courses.
      prerequisites: List of prerequisite pairs.

    Returns:
      True if all courses can be finished, False otherwise.
    """
    adj = defaultdict(list)
    for course, prereq in prerequisites:
        adj[prereq].append(course)

    # 0: unvisited, 1: visiting (in current path), 2: visited (processed)
    visited_state = [0] * numCourses

    def dfs(course):
        if visited_state[course] == 1: # Cycle detected
            return False
        if visited_state[course] == 2: # Already visited and processed
            return True

        visited_state[course] = 1 # Mark as visiting

        for neighbor in adj[course]:
            if not dfs(neighbor):
                return False

        visited_state[course] = 2 # Mark as visited
        return True

    for i in range(numCourses):
        if not dfs(i):
            return False
            
    return True

# --- Kahn's Algorithm (BFS for Topological Sort) ---
def can_finish_kahn(numCourses, prerequisites):
    """
    Determines if all courses can be finished using Kahn's algorithm (BFS).

    Args:
      numCourses: Total number of courses.
      prerequisites: List of prerequisite pairs.

    Returns:
      True if all courses can be finished, False otherwise.
    """
    adj = defaultdict(list)
    in_degree = [0] * numCourses

    for course, prereq in prerequisites:
        adj[prereq].append(course)
        in_degree[course] += 1

    queue = deque()
    for i in range(numCourses):
        if in_degree[i] == 0:
            queue.append(i)

    courses_taken = 0
    while queue:
        course = queue.popleft()
        courses_taken += 1

        for neighbor in adj[course]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return courses_taken == numCourses

```