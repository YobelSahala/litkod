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

module.exports = alienOrder;