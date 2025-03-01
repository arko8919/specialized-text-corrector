import { state } from '../state/state';
import { addOverusedWords } from './add-overused-words';
import { splitTextIntoWords } from '../utils/split-text-into-words';
import { dom } from '../state/dom-references';

/**
 * Adds new overused words to the state.
 * - Ensures words are unique before adding.
 * - Calls `updateUI()` only if necessary.
 *
 * @param {string[]} words - The words to add.
 */
function addWordsToState(words) {
    if (!words.length) return;

    // Remove duplicates and filter out empty strings
    const uniqueWords = [...new Set(words)].filter(Boolean);
    const newWords = uniqueWords.filter(
        (word) => !state.overusedWords.includes(word)
    );

    if (newWords.length === 0) return; // Exit if no new words to add

    // Add new words to state
    state.overusedWords.push(...newWords);

    // Update UI
    addOverusedWords();

    // Clears the input field
    dom.overusedWordsInput.value = '';
}

/**
 * Handles the event when the "Add" button is clicked.
 * - Processes input and updates state.
 */
function handleAddButtonClick(event) {
    event.preventDefault(); // Prevent unintended form resets

    if (!dom.overusedWordsInput) return;

    // Split input text into lowercase words based on regex
    const words = splitTextIntoWords(
        /,\s*|\s+/g,
        dom.overusedWordsInput.value.trim()
    );

    addWordsToState(words);
}

/**
 * Initializes event listeners for adding overused words.
 */
export function manageOverusedWords() {
    if (!dom.addOverusedWordsBtn) return;
    dom.addOverusedWordsBtn.addEventListener('click', handleAddButtonClick);
}
