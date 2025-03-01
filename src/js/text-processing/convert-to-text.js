/**
 * Converts pasted content into clean text.
 * @param {string} htmlString - The raw HTML input.
 * @returns {string} - Cleaned text.
 */
export function convertToText(htmlString) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    return tempDiv.textContent || tempDiv.innerText || '';
}
