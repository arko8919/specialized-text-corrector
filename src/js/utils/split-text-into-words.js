/**
 * Splits text into an array of words based on the provided regex pattern.
 * - Ensures input is a valid string to prevent runtime errors.
 * - Converts input to lowercase for uniform processing.
 * - Trims whitespace before splitting to avoid unnecessary empty entries.
 * - Removes empty values after splitting.
 *
 * @param {RegExp} [regex=/\s+/g] - The regular expression to split words (default: whitespace).
 * @param {string} input - The text input to process.
 * @returns {string[]} Array of words.
 */
export function splitTextIntoWords(regex = /\s+/g, input = '') {
    // Ensure input is always a string and trim it to remove leading/trailing spaces
    const sanitizedInput = String(input).trim().toLowerCase();

    // Split the text and remove any empty values
    return sanitizedInput
        .split(regex)
        .map((word) => word.trim())
        .filter(Boolean);
}
