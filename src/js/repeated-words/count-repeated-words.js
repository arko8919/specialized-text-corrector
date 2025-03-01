/**
 * Counts occurrences of words in an array.
 * @param {string[]} words - An array of words.
 * @returns {Array} - Sorted list of [word, count] pairs.
 */
export function countRepeatedWords(words) {
    if (!Array.isArray(words) || words.length === 0) return [];

    const wordCounts = words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
}
