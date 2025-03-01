import { state } from '../state/state';
import { selectRepeatedWord } from './select-repeated-word';
import { setActiveRepeatedWord } from './set-active-repeated-word';
import { highlightSelectedRepeatedWord } from './highlight-selected-repeated-word';
import { countRepeatedWords } from './count-repeated-words';
import { splitTextIntoWords } from '../utils/split-text-into-words';
import { dom } from '../state/dom-references';

/**
 * Generates and updates the repeated words list in the UI.
 *
 * @param {string} textInput - The text input from which repeated words are extracted.
 */
export function createRepeatedWordsList(textInput) {
    // Split the text into words using non-word characters as delimiters
    const textAreaWords = splitTextIntoWords(/\W+/, textInput);

    // Count occurrences of repeated words
    const repeatedWords = countRepeatedWords(textAreaWords);

    // Clear the existing repeated words list in the UI
    dom.repeatedWordsList.innerHTML = '';

    // If the previously selected word no longer exists, reset the selection
    if (!textAreaWords.includes(state.currentWord)) {
        state.currentWord = '';
    }

    // Populate the repeated words list dynamically
    repeatedWords.forEach(([word, count]) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${word} : ${count}`;

        // Add a click event to select a repeated word when clicked
        listItem.addEventListener('click', (event) => {
            selectRepeatedWord(event.target, word);
            event.preventDefault();
        });

        dom.repeatedWordsList.appendChild(listItem);
    });

    // If a word is highlighted, update the text highlight and set active state in the list
    if (state.highlighted) {
        dom.highlightedRepeatedWords.innerHTML = highlightSelectedRepeatedWord(
            textInput,
            state.currentWord
        );
        setActiveRepeatedWord();
    }
}
