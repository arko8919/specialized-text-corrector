export function countRepeatedWords(words) {
    const countedWords = {};
    // Save each unique word into an object and count how many times each word repeat
    words.forEach(word => countedWords[word] = (countedWords[word] || 0) + 1);

    const sortedWords = [];
    // Move words from an object into an array with a number value representing how many times each word was repeated in the input text area
    for (const word in countedWords) {
        sortedWords.push([word, countedWords[word]]);
    }

    // Sort words from most to least repeated
    sortedWords.sort((a, b) => b[1] - a[1]);

    return sortedWords;
};
