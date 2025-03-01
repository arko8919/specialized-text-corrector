import { splitTextIntoWords } from '../utils/split-text-into-words';
import { dom } from '../state/dom-references'; // Centralized DOM elements

/**
 * Extracts text statistics (word count, sentence count, character count).
 * - Uses `splitTextIntoWords()` to count words accurately.
 * - Splits sentences correctly based on punctuation.
 * - Updates UI dynamically.
 *
 * @param {string} input - The text input from which to extract statistics.
 */
export function getStringData(input) {
    if (!input || typeof input !== 'string') {
        return { wordCount: 0, sentenceCount: 0, characterCount: 0 };
    }

    // Extract words using a proper word delimiter
    const words = splitTextIntoWords(/\W+/, input);
    const wordCount = words.length;

    // Improved sentence splitting: detects sentences ending in '.', '?', or '!' correctly
    const sentences = input.match(/[^.!?]+[.!?]+/g) || [];
    const sentenceCount = sentences.length;

    const characterCount = input.length;

    return { wordCount, sentenceCount, characterCount };
}
