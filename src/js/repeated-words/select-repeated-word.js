import { state } from '../state/state';
import { setActiveRepeatedWord } from './set-active-repeated-word';
import { highlightSelectedRepeatedWord } from './highlight-selected-repeated-word';
import { dom } from '../state/dom-references';

/**
 * Handles selection of a repeated word from the list.
 * - If the word is not already active, it highlights it in the list and updates the text highlight.
 * - If the word is already active, it removes the highlight and resets the selection.
 *
 * @param {HTMLElement} target - The clicked list item (word in the repeated words list).
 * @param {string} repeatedWord - The word that was clicked.
 */
export function selectRepeatedWord(target, repeatedWord) {
    const isActive = target.classList.contains('active');

    if (!isActive) {
        // Set the selected word in the application state
        state.highlighted = true;
        state.currentWord = repeatedWord;

        //  Highlight the selected word in the repeated words list
        setActiveRepeatedWord();

        // Highlight occurrences of the selected word in the main text area
        dom.highlightedRepeatedWords.innerHTML = highlightSelectedRepeatedWord(
            dom.textArea.innerHTML,
            state.currentWord
        );
    } else {
        //  If the word is already selected, remove its highlight and reset the state
        target.classList.remove('active');
        dom.highlightedRepeatedWords.innerHTML = dom.textArea.innerHTML;
        state.highlighted = false;
        state.currentWord = '';
    }
}
