// Match all words which are marked by the user and highlight them
export function highlightCheckedOverusedWords(checkedWords, textAreaValue) {
    for (let index = 0; index < checkedWords.length; index++) {
        // Create a regular expression which change with each iteration
        const regex = new RegExp(`\\b${checkedWords[index]}\\b`, 'gi');
        // Highlight marked by the user words by enclosing them with <mark> element
        textAreaValue = textAreaValue.replace(regex, match => `<mark class="match">${match}</mark>`);
    }
    // Return text layer of highlighted overused words
    return textAreaValue;
};