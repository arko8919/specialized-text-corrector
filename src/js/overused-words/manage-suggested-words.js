import { state } from '../state/state';
import { addOverusedWords } from './add-overused-words';
import { dom } from '../state/dom-references';

/**
 * Initializes suggested overused words in the UI.
 * - Retrieves words from `state`.
 * - Prevents duplicate words in the user's overused list.
 */
export function manageSuggestedWords() {
    if (!dom.cvOverusedWordsList || !dom.commonOverusedWordsList) return; // Ensure required elements exist

    // Populate UI with predefined CV and common overused words
    [
        [state.cvOverusedWords, dom.cvOverusedWordsList],
        [state.commonOverusedWords, dom.commonOverusedWordsList],
    ].forEach(([wordList, container]) => {
        wordList.forEach((word) => {
            // Create list item
            const listItem = document.createElement('li');
            listItem.textContent = word;

            // Create "Add" button
            const button = document.createElement('button');
            button.textContent = 'add';
            button.classList.add('material-icons', 'predefined-words', 'btn');

            // Event listener: Adds word to state and updates UI
            button.addEventListener('click', (event) => {
                addOverusedWord(word);
                event.preventDefault(); // Prevent unintended form resets
            });

            listItem.appendChild(button);
            container.appendChild(listItem);
        });
    });
}

/**
 * Adds a word to the overused words list in the state and updates UI.
 * - Ensures no duplicate words are added.
 *
 * @param {string} word - The word to be added.
 */
function addOverusedWord(word) {
    if (!state.overusedWords.includes(word)) {
        state.overusedWords.push(word); // Update state
        addOverusedWords(); // Update UI
    }
}
