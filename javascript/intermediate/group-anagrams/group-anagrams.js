/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramGroups = new Map(); // Using Map for better key handling

    for (const word of strs) {
        // Sort the word to create a canonical key
        const key = word.split('').sort().join('');

        // Get the list for this key, or initialize an empty array
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }
        anagramGroups.get(key).push(word);
    }

    // Convert map values (arrays of anagrams) to an array of arrays
    return Array.from(anagramGroups.values());
};

module.exports = groupAnagrams;