### Group Anagrams: Step-by-Step Solution

This problem asks us to group words that are anagrams of each other from a given list of strings. Anagrams are words formed by rearranging the letters of another, meaning they contain the same characters with the same frequencies.

#### 1. Understanding the Problem

We need to identify a way to uniquely represent an anagram. For example, "eat", "tea", and "ate" are all anagrams of each other. They all contain one 'e', one 'a', and one 't'.

#### 2. Optimal Approach: Using a Hash Map with Sorted Strings as Keys

The most common and efficient approach involves using a hash map (JavaScript `Map` or plain `Object`) where the **key** for each group of anagrams is a canonical representation of the anagram, and the **value** is a list of strings that are anagrams of each other.

What makes a good canonical representation?

-   **Sorted String:** If you sort the letters of an anagram, they will all produce the same sorted string. For example, sorting "eat", "tea", and "ate" all result in "aet". This sorted string can serve as our unique key.
-   **Character Count String:** Another way is to count the frequency of each character (e.g., `"#1#0#0#1#1..."` for 'a', 'b', 'c', 'd', 'e', etc.) and use this count as a string key. This is particularly useful if the character set is small and fixed (like lowercase English letters).

Here is the algorithm using sorted strings as keys:

1.  Initialize an empty hash map, `anagramGroups` (using `Map` for better performance with arbitrary keys).
2.  Iterate through each `word` in the input list `strs`:
    a. Create a `key` for the current `word` by sorting its characters. For example, if `word` is "tea", the `key` would be "aet".
    b. Check if this `key` already exists in `anagramGroups`:
        - If it does, append the current `word` to the array associated with that `key`.
        - If it does not, create a new entry in `anagramGroups` with the `key` and initialize its value as a new array containing only the current `word`.
3.  After iterating through all words, the `anagramGroups` map will contain all the anagrams grouped by their sorted keys. The values of this map are the arrays of anagrams. Return `Array.from(anagramGroups.values())`.

This approach has a time complexity of O(N * K log K), where N is the number of strings in the input list, and K is the maximum length of a string. The `K log K` comes from sorting each string. The space complexity is O(N * K) in the worst case, where all strings are unique and stored in the hash map.

### JavaScript Code Solution

```javascript
// --- Sorted String as Key Approach ---
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsSortedKey = function(strs) {
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

// --- Character Count String as Key Approach ---
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsCharCount = function(strs) {
    const anagramGroups = new Map();

    for (const word of strs) {
        const counts = new Array(26).fill(0); // For 'a' through 'z'
        for (const char of word) {
            counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        // Use a string representation of the counts array as the key
        // e.g., "#1#0#0#1#1..." for a word with one 'a', one 'd', one 'e'
        const key = counts.join('#'); 
        
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }
        anagramGroups.get(key).push(word);
    }

    return Array.from(anagramGroups.values());
};
```
