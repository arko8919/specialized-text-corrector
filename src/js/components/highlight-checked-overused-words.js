// Match all words which are checked by the user and highlight them
export function highlightCheckedOverusedWords(checkedWords, textAreaValue) {
    for (let index = 0; index < checkedWords.length; index++) {
        // Create a regular expression which change with each iteration
        const regex = new RegExp(`\\b${checkedWords[index]}\\b`, 'gi');
        // Replace words with markup and words
        textAreaValue = textAreaValue.replace(regex, match => `<mark class="match">${match}</mark>`);
    }
    // Returns marked text which highlighted words
    return textAreaValue;

};