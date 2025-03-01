import { state } from '../state/state';
import { highlightOverusedWords } from './highlight-overused-words';
import { dom } from '../state/dom-references';

/**
 * Removes an overused word from `state` and updates the UI.
 * - Ensures `state` is updated before modifying the DOM.
 * - Removes the word from `state.overusedWords` and `state.checkedWords`.
 * - Updates text highlights if necessary.
 *
 * @param {HTMLElement} target - The clicked remove button.
 */
export function removeOverusedWord(target) {
    if (!target || !target.parentElement) return; // Ensure valid element

    const wordToRemove = target.parentElement.id;

    // Update state first before modifying the UI
    removeWordFromState(wordToRemove);

    // Remove word from the UI
    target.parentElement.remove();

    // Update text highlights ( UI ) if the container exists
    if (dom.highlightedOverusedWords) {
        dom.highlightedOverusedWords.innerHTML = highlightOverusedWords(
            dom.textArea.innerHTML,
            state.checkedWords
        );
    }
}

/**
 * Removes a word from `state.overusedWords` and `state.checkedWords`.
 * - Ensures state integrity by filtering out the word.
 *
 * @param {string} word - The word to remove from state.
 */
function removeWordFromState(word) {
    state.checkedWords = state.checkedWords.filter((w) => w !== word);
    state.overusedWords = state.overusedWords.filter((w) => w !== word);
}
