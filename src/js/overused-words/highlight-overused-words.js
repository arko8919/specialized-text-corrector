/**
 * Highlights checked overused words in the given text input.
 *
 * @param {string} textInput - The original text input.
 * @param {string[]} checkedWords - Array of checked overused words.
 * @returns {string} - The text with highlighted overused words.
 */
export function highlightOverusedWords(textInput, checkedWords) {
    if (!textInput) return '';

    // Ensure there are words to highlight
    if (!Array.isArray(checkedWords) || checkedWords.length === 0)
        return textInput;

    // Escape special characters in words to prevent regex errors
    const escapedWords = checkedWords.map((word) =>
        word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    );

    // Create regex pattern
    const regex = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'gi');

    // Highlight matched words
    return textInput.replace(
        regex,
        (match) => `<mark class="match">${match}</mark>`
    );
}
