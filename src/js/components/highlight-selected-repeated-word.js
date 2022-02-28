// Match repeated word which is selected by the user and highlight it
const textAreaRef = document.querySelector('#text-area');

export function highlightSelectedRepeatedWord(word, textAreaValue) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');

    // Replace words with markup and words
    return textAreaValue.replace(regex , match => `<mark class="match">${match}</mark>`);
};