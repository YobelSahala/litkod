### Word Search II: Step-by-Step Solution

Given an `m x n` `board` of characters and a list of strings `words`, return *all words in* `words` *that can be found in the `board`*.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

#### 1. Understanding the Problem

This is a combination of a graph traversal (DFS on the board) and string matching. A naive approach of running a separate DFS for each word from each possible starting cell would be too slow, especially with a large `words` list.

#### 2. Optimal Approach: Trie + Backtracking (DFS)

The most efficient solution involves using a **Trie (Prefix Tree)** to store the `words` and then performing a **Depth-First Search (DFS)** on the `board`.

Here's the intuition:
-   **Trie for Words:** Store all `words` from `wordList` in a Trie. Each node in the Trie will represent a character, and a special marker (e.g., `isWord` flag or `word` itself) will indicate the end of a valid word. This allows us to efficiently check if a prefix exists and if a complete word is formed.
-   **DFS on Board:** Start a DFS from each cell `(r, c)` on the `board`. As we traverse, we simultaneously traverse the Trie. If the current character on the board matches a child in the Trie, we continue the DFS. If we reach a Trie node that marks the end of a word, we add that word to our results.

Here is the algorithm:

1.  **Build Trie:**
    -   Create a `TrieNode` class (or object-based representation) with children (a map of characters to `TrieNode`s) and an `isWord` flag (or `word` itself).
    -   Insert all `words` from `wordList` into the Trie.
2.  Initialize an empty `result` set (to handle potential duplicate words if they can be formed in multiple ways, though the problem states unique words in `words`).
3.  Get board dimensions: `rows`, `cols`.
4.  Define a recursive DFS function, `dfs(r, c, parentNode)`:
    a. **Base Cases/Constraints:**
        -   If `(r, c)` is out of bounds, or the cell has been visited (mark visited by changing `board[r][c]` to a temporary character like '#'), or the current character `board[r][c]` is not a child of `parentNode` in the Trie, then return.
    b. **Choose:**
        -   Store the current character: `char = board[r][c]`.
        -   Move to the next Trie node: `currentNode = parentNode.children[char]`.
        -   Mark the current cell as visited on the board: `board[r][c] = '#'`.
    c. **Check for Word:** If `currentNode` has an `isWord` flag set (or `currentNode.word` is not `null`):
        -   Add `currentNode.word` to `result`.
        -   **Important:** Clear the `word` from the Trie node (`currentNode.word = null`) to avoid adding the same word multiple times if it can be found via different paths, and to prevent further exploration of this exact word if it's already found.
    d. **Explore Neighbors:** Recursively call `dfs` for all four adjacent neighbors: `(r+1, c)`, `(r-1, c)`, `(r, c+1)`, `(r, c-1)`, passing `currentNode` as the new `parentNode`.
    e. **Unchoose (Backtrack):** After exploring all paths from `(r, c)`, restore the `board[r][c]` to its original character. This is crucial for other DFS paths.
5.  Iterate through each cell `(r, c)` in the `board`:
    -   Call `dfs(r, c, trieRoot)`.
6.  Return `Array.from(result)`.

This approach has a time complexity that is difficult to precisely quantify but is much better than naive brute-force. It's roughly O(M * N * 4^L) in the worst case (where L is max word length), but significantly optimized by the Trie pruning. The space complexity is O(sum of word lengths) for the Trie and O(M * N) for the recursion stack.

### JavaScript Code Solution

```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.word = null; // Stores the full word if this node marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }

    const rows = board.length;
    const cols = board[0].length;
    const result = new Set(); // Use a Set to avoid duplicate words in the result

    function dfs(r, c, node) {
        // Base cases for DFS
        if (r < 0 || r >= rows || c < 0 || c >= cols) {
            return;
        }

        const char = board[r][c];
        // If the character is already visited or not in the current Trie node's children
        if (char === '#' || !node.children[char]) {
            return;
        }

        const currentNode = node.children[char];

        // If this node marks the end of a word
        if (currentNode.word) {
            result.add(currentNode.word);
            currentNode.word = null; // Avoid adding the same word multiple times
                                     // and prevent further exploration of this exact word
        }

        // Mark as visited by changing the character
        board[r][c] = '#';

        // Explore neighbors
        dfs(r + 1, c, currentNode);
        dfs(r - 1, c, currentNode);
        dfs(r, c + 1, currentNode);
        dfs(r, c - 1, currentNode);

        // Backtrack: restore the character
        board[r][c] = char;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, trie.root);
        }
    }

    return Array.from(result);
};
```
