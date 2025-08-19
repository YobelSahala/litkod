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

module.exports = findWords;