### Alien Dictionary: Step-by-Step Solution

This problem presents a unique challenge: given a list of words from an alien language, sorted lexicographically by its unknown rules, we need to determine the order of the letters in that language. This is a classic application of **topological sort** on a directed graph.

#### 1. Understanding the Problem as a Graph

-   **Nodes:** Each unique character in the alien language is a node in our graph.
-   **Edges:** If `word1` comes before `word2` in the sorted `words` list, and they differ at their first differing character, say `c1` in `word1` and `c2` in `word2`, then `c1` must come before `c2` in the alien alphabet. This implies a directed edge from `c1` to `c2` (`c1 -> c2`).
-   **Goal:** Find a topological sort of this graph. If a cycle exists, it means the given order is invalid, and we should return an empty string.

#### 2. Building the Graph

1.  **Initialize Adjacency List and In-degrees:**
    -   Create an adjacency list `adj` (e.g., `Map<char, Set<char>>`) to store the graph. `adj.get(char)` will contain characters that come *after* `char`.
    -   Create an `inDegree` map (or object) to store the in-degree of each character (number of characters that must come before it). Initialize all unique characters from `words` with an in-degree of 0.
2.  **Populate Graph from `words`:** Iterate through adjacent pairs of words in the `words` list (`words[i]` and `words[i+1]`):
    -   Compare `words[i]` and `words[i+1]` character by character until a difference is found.
    -   If `words[i][k]` is the first differing character from `words[i+1][k]`:
        -   Add an edge `words[i][k] -> words[i+1][k]` to `adj`.
        -   Increment `inDegree[words[i+1][k]]`.
        -   Break from this inner comparison (only the first differing characters determine the order).
    -   **Edge Case:** If `word1` is a prefix of `word2` (e.g., `"abc"` and `"ab"`), but `word1` comes *after* `word2` in the input list, it indicates an invalid order. Return an empty string.

#### 3. Topological Sort (Kahn's Algorithm - BFS)

Once the graph is built, we use Kahn's algorithm (BFS-based topological sort) to find the order.

1.  **Initialize Queue:** Add all characters with an `inDegree` of `0` to a queue.
2.  **BFS Traversal:**
    -   Initialize an empty string `result`.
    -   While the queue is not empty:
        a. Dequeue a `char`.
        b. Append `char` to `result`.
        c. For each `neighbor` in `adj.get(char)`:
            i. Decrement `inDegree[neighbor]`.
            ii. If `inDegree[neighbor]` becomes `0`, enqueue `neighbor`.
3.  **Cycle Detection:** After the BFS, if the length of `result` is not equal to the total number of unique characters in the graph, it means there was a cycle, and not all characters could be topologically sorted. Return an empty string.
4.  Otherwise, return `result`.

This approach has a time complexity of O(V + E), where V is the number of unique characters and E is the number of directed edges. Building the graph takes O(sum of lengths of words). The space complexity is O(V + E) for the graph and in-degree map.

### JavaScript Code Solution

```javascript
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const adj = new Map(); // Map<char, Set<char>>
    const inDegree = new Map(); // Map<char, number>

    // Initialize all unique characters with in-degree 0
    for (const word of words) {
        for (const char of word) {
            if (!inDegree.has(char)) {
                inDegree.set(char, 0);
            }
        }
    }

    // Populate graph and in-degrees
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

        // Handle invalid order: word1 is a prefix of word2, but word1 is longer
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return "";
        }

        // Find the first differing character
        for (let k = 0; k < Math.min(word1.length, word2.length); k++) {
            const char1 = word1[k];
            const char2 = word2[k];
            if (char1 !== char2) {
                // Add edge char1 -> char2
                if (!adj.has(char1)) {
                    adj.set(char1, new Set());
                }
                if (!adj.get(char1).has(char2)) {
                    adj.get(char1).add(char2);
                    inDegree.set(char2, inDegree.get(char2) + 1);
                }
                break; // Only the first differing characters matter
            }
        }
    }

    // Topological Sort (Kahn's Algorithm - BFS)
    const queue = [];
    for (const [char, degree] of inDegree.entries()) {
        if (degree === 0) {
            queue.push(char);
        }
    }

    let result = "";
    while (queue.length > 0) {
        const char = queue.shift();
        result += char;

        if (adj.has(char)) {
            for (const neighbor of adj.get(char)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }

    // Cycle Detection
    // If the length of the result is not equal to the number of unique characters,
    // it means there was a cycle.
    if (result.length !== inDegree.size) {
        return "";
    }

    return result;
};
```