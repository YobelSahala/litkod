### Word Search II: Step-by-Step Solution

This problem asks us to find all words from a given list that can be found in a 2D character `board`. Words must be formed by sequentially adjacent cells (horizontal or vertical), and each cell can only be used once per word.

#### 1. Understanding the Problem

This is a combination of a graph traversal (DFS on the board) and string matching. A naive approach of running a separate DFS for each word from each possible starting cell would be too slow, especially with a large `words` list.

#### 2. Optimal Approach: Trie + Backtracking (DFS)

The most efficient solution involves using a **Trie (Prefix Tree)** to store the `words` and then performing a **Depth-First Search (DFS)** on the `board`.

Here's the intuition:
-   **Trie for Words:** Store all `words` from `wordList` in a Trie. Each node in the Trie will represent a character, and a special marker (e.g., `is_word` flag or `word` itself) will indicate the end of a valid word. This allows us to efficiently check if a prefix exists and if a complete word is formed.
-   **DFS on Board:** Start a DFS from each cell `(r, c)` on the `board`. As we traverse, we simultaneously traverse the Trie. If the current character on the board matches a child in the Trie, we continue the DFS. If we reach a Trie node that marks the end of a word, we add that word to our results.

Here is the algorithm:

1.  **Build Trie:**
    -   Create a `TrieNode` class (or dictionary-based representation) with children (a map of characters to `TrieNode`s) and an `is_word` flag (or `word` itself).
    -   Insert all `words` from `wordList` into the Trie.
2.  Initialize an empty `result` set (to handle potential duplicate words if they can be formed in multiple ways, though the problem states unique words in `words`).
3.  Get board dimensions: `rows`, `cols`.
4.  Define a recursive DFS function, `dfs(r, c, parent_node)`:
    a. **Base Cases/Constraints:**
        - If `(r, c)` is out of bounds, or the cell has been visited (mark visited by changing `board[r][c]` to a temporary character like '#'), or the current character `board[r][c]` is not a child of `parent_node` in the Trie, then return.
    b. **Choose:**
        - Store the current character: `char = board[r][c]`.
        - Move to the next Trie node: `current_node = parent_node.children[char]`.
        - Mark the current cell as visited on the board: `board[r][c] = '#'`.
    c. **Check for Word:** If `current_node` has an `is_word` flag set (or `current_node.word` is not `None`):
        - Add `current_node.word` to `result`.
        - **Important:** Clear the `word` from the Trie node (`current_node.word = None`) to avoid adding the same word multiple times if it can be found via different paths, and to prevent further exploration of this exact word if it's already found.
    d. **Explore Neighbors:** Recursively call `dfs` for all four adjacent neighbors: `(r+1, c)`, `(r-1, c)`, `(r, c+1)`, `(r, c-1)`, passing `current_node` as the new `parent_node`.
    e. **Unchoose (Backtrack):** After exploring all paths from `(r, c)`, restore the `board[r][c]` to its original character. This is crucial for other DFS paths.
5.  Iterate through each cell `(r, c)` in the `board`:
    - Call `dfs(r, c, trie_root)`.
6.  Return `list(result)`.

This approach has a time complexity that is difficult to precisely quantify but is much better than naive brute-force. It's roughly O(M * N * 4^L) in the worst case (where L is max word length), but significantly optimized by the Trie pruning. The space complexity is O(sum of word lengths) for the Trie and O(M * N) for the recursion stack.

### Python Code Solution

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = None # Stores the full word if this node marks the end of a word

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.word = word

def find_words(board, words):
    """
    Finds all words from a list that can be found in a 2D board.

    Args:
      board: A 2D list of characters.
      words: A list of strings.

    Returns:
      A list of strings found in the board.
    """
    trie = Trie()
    for word in words:
        trie.insert(word)

    rows, cols = len(board), len(board[0])
    result = set() # Use a set to avoid duplicate words in the result

    def dfs(r, c, node):
        # Base cases for DFS
        if (r < 0 or r >= rows or c < 0 or c >= cols or
            board[r][c] not in node.children): # Check if char is in Trie
            return

        char = board[r][c]
        current_node = node.children[char]

        # If this node marks the end of a word
        if current_node.word:
            result.add(current_node.word)
            current_node.word = None # Avoid adding the same word multiple times
                                     # and prevent further exploration of this exact word

        # Mark as visited by changing the character
        board[r][c] = '#'

        # Explore neighbors
        dfs(r + 1, c, current_node)
        dfs(r - 1, c, current_node)
        dfs(r, c + 1, current_node)
        dfs(r, c - 1, current_node)

        # Backtrack: restore the character
        board[r][c] = char

    for r in range(rows):
        for c in range(cols):
            dfs(r, c, trie.root)
            
    return list(result)

```