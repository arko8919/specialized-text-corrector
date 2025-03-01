import { state } from '../state/state';
import { highlightOverusedWords } from './highlight-overused-words';
import { dom } from '../state/dom-references';

/**
 * Handles the event when a checkbox is toggled.
 * - Updates the state first.
 * - Calls `updateUI()` separately to update the DOM.
 *
 * @param {HTMLElement} target - The clicked checkbox.
 */
export function updateCheckedWords(target) {
    if (!target || !target.parentElement) return; // Ensure target element is valid

    const word = target.parentElement.id;

    // Update state
    updateCheckedWordsState(word, target.checked);

    // Update text highlights ( UI ) if the container exists
    if (dom.highlightedOverusedWords) {
        dom.highlightedOverusedWords.innerHTML = highlightOverusedWords(
            dom.textArea.innerHTML,
            state.checkedWords
        );
    }
}

/**
 * Updates the state by adding or removing words from `state.checkedWords`.
 * - Adds the word if checked.
 * - Removes the word if unchecked.
 *
 * @param {string} word - The word to update in state.
 * @param {boolean} isChecked - Whether the word is checked or unchecked.
 */
function updateCheckedWordsState(word, isChecked) {
    state.checkedWords = isChecked
        ? [...state.checkedWords, word] // Add word if checked
        : state.checkedWords.filter((w) => w !== word); // Remove word if unchecked
}
