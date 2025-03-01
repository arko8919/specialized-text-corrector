/**
 * Highlights the selected repeated word in the given text input.
 *
 * @param {string} textInput - The original text input.
 * @param {string} currentWord - The word to highlight.
 * @returns {string} - The text with the selected word highlighted.
 */
export function highlightSelectedRepeatedWord(textInput, currentWord) {
    if (!textInput || !currentWord) return textInput;

    // Escape regex special characters in selected word
    const escapedWord = currentWord.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    // Create regex pattern
    const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');

    // Replace occurrences with highlighted version
    return textInput.replace(
        regex,
        (match) => `<mark class="match">${match}</mark>`
    );
}
