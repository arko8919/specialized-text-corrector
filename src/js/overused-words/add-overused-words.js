import { state } from '../state/state';
import { removeOverusedWord } from './remove-overused-word';
import { updateCheckedWords } from './update-checked-words';
import { convertToText } from '../text-processing/convert-to-text';

// Cache DOM references once
const overusedWordsListRef = document.querySelector('.overused-words-list');
const textAreaRef = document.querySelector('#text-area');

/**
 * Updates the overused words list in the UI.
 * - Clears the existing list.
 * - Rebuilds the list with checkboxes and remove buttons.
 * - Attaches event listeners for user interactions.
 */
export function addOverusedWords() {
    if (!overusedWordsListRef || !textAreaRef) return; // Ensure required elements exist

    // Clear the existing list
    overusedWordsListRef.innerHTML = '';

    // Extracts and cleans plain text from the text area
    const textInput = convertToText(textAreaRef.innerHTML);

    state.overusedWords.forEach((word) => {
        const listItem = document.createElement('li');
        listItem.id = word;
        listItem.textContent = word;

        const inputElement = document.createElement('input');
        inputElement.type = 'checkbox';
        inputElement.classList.add('checkbox');
        inputElement.checked = state.checkedWords.includes(word);

        const spanElement = document.createElement('span'); // Custom checkbox UI
        spanElement.classList.add('check-mark');

        const spanRemoveElement = document.createElement('span'); // Remove button
        spanRemoveElement.classList.add('remove');

        // Remove word when "-" is clicked
        spanRemoveElement.addEventListener('click', (event) => {
            removeOverusedWord(event.target, textInput);
            event.preventDefault();
        });

        // Toggle words highlighting when checkbox is clicked
        inputElement.addEventListener('change', (event) => {
            updateCheckedWords(event.target, textInput);
            event.preventDefault();
        });

        // Append elements to list item
        listItem.append(inputElement, spanElement, spanRemoveElement);
        overusedWordsListRef.appendChild(listItem);
    });
}
