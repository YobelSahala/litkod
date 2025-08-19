/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }

    const queue = [[beginWord, 1]]; // [word, level]
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        if (currentWord === endWord) {
            return level;
        }

        // Generate all possible next words
        for (let i = 0; i < currentWord.length; i++) {
            const originalChar = currentWord[i];
            for (let charCode = 97; charCode <= 122; charCode++) { // ASCII for 'a' to 'z'
                const newChar = String.fromCharCode(charCode);
                if (newChar === originalChar) {
                    continue;
                }
                
                const nextWordArr = currentWord.split('');
                nextWordArr[i] = newChar;
                const nextWord = nextWordArr.join('');

                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, level + 1]);
                }
            }
        }
    }

    return 0; // No transformation sequence found
};

module.exports = ladderLength;