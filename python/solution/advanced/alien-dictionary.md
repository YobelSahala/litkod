### Alien Dictionary: Step-by-Step Solution

This problem presents a unique challenge: given a list of words from an alien language, sorted lexicographically by its unknown rules, we need to determine the order of the letters in that language. This is a classic application of **topological sort** on a directed graph.

#### 1. Understanding the Problem as a Graph

-   **Nodes:** Each unique character in the alien language is a node in our graph.
-   **Edges:** If `word1` comes before `word2` in the sorted `words` list, and they differ at their first differing character, say `c1` in `word1` and `c2` in `word2`, then `c1` must come before `c2` in the alien alphabet. This implies a directed edge from `c1` to `c2` (`c1 -> c2`).
-   **Goal:** Find a topological sort of this graph. If a cycle exists, it means the given order is invalid, and we should return an empty string.

#### 2. Building the Graph

1.  **Initialize Adjacency List and In-degrees:**
    -   Create an adjacency list `adj` (e.g., `defaultdict(list)`) to store the graph. `adj[char]` will contain characters that come *after* `char`.
    -   Create an `in_degree` dictionary (or array) to store the in-degree of each character (number of characters that must come before it). Initialize all unique characters from `words` with an in-degree of 0.
2.  **Populate Graph from `words`:** Iterate through adjacent pairs of words in the `words` list (`words[i]` and `words[i+1]`):
    -   Compare `words[i]` and `words[i+1]` character by character until a difference is found.
    -   If `words[i][k]` is the first differing character from `words[i+1][k]`:
        -   Add an edge `words[i][k] -> words[i+1][k]` to `adj`.
        -   Increment `in_degree[words[i+1][k]]`.
        -   Break from this inner comparison (only the first differing characters determine the order).
    -   **Edge Case:** If `word1` is a prefix of `word2` (e.g., `"abc"` and `"ab"`), but `word1` comes *after* `word2` in the input list, it indicates an invalid order. Return an empty string.

#### 3. Topological Sort (Kahn's Algorithm - BFS)

Once the graph is built, we use Kahn's algorithm (BFS-based topological sort) to find the order.

1.  **Initialize Queue:** Add all characters with an `in_degree` of `0` to a queue.
2.  **BFS Traversal:**
    -   Initialize an empty string `result`.
    -   While the queue is not empty:
        a. Dequeue a `char`.
        b. Append `char` to `result`.
        c. For each `neighbor` in `adj[char]`:
            i. Decrement `in_degree[neighbor]`.
            ii. If `in_degree[neighbor]` becomes `0`, enqueue `neighbor`.
3.  **Cycle Detection:** After the BFS, if the length of `result` is not equal to the total number of unique characters in the graph, it means there was a cycle, and not all characters could be topologically sorted. Return an empty string.
4.  Otherwise, return `result`.

This approach has a time complexity of O(V + E), where V is the number of unique characters and E is the number of directed edges. Building the graph takes O(sum of lengths of words). The space complexity is O(V + E) for the graph and in-degree array.

### Python Code Solution

```python
from collections import defaultdict, deque

def alien_order(words):
    """
    Determines the lexicographical order of characters in an alien language.

    Args:
      words: A list of strings from the alien language's dictionary.

    Returns:
      A string of unique letters sorted by the new language's rules, or "" if no solution.
    """
    # 1. Build Graph (adjacency list and in-degrees)
    adj = defaultdict(list)
    in_degree = defaultdict(int)

    # Initialize all unique characters with in-degree 0
    for word in words:
        for char in word:
            in_degree[char] = 0

    # Populate graph and in-degrees
    for i in range(len(words) - 1):
        word1 = words[i]
        word2 = words[i+1]
        
        # Handle invalid order: word1 is a prefix of word2, but word1 is longer
        if len(word1) > len(word2) and word1.startswith(word2):
            return ""

        # Find the first differing character
        for k in range(min(len(word1), len(word2))):
            char1 = word1[k]
            char2 = word2[k]
            if char1 != char2:
                # Add edge char1 -> char2
                adj[char1].append(char2)
                in_degree[char2] += 1
                break # Only the first differing characters matter

    # 2. Topological Sort (Kahn's Algorithm - BFS)
    queue = deque()
    for char in in_degree: # Iterate through all unique characters
        if in_degree[char] == 0:
            queue.append(char)

    result = []
    while queue:
        char = queue.popleft()
        result.append(char)

        for neighbor in adj[char]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    # 3. Cycle Detection
    # If the length of the result is not equal to the number of unique characters,
    # it means there was a cycle.
    if len(result) != len(in_degree):
        return ""

    return "".join(result)

```
