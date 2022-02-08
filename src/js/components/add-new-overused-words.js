import { removeOverusedWord } from './remove-overused-word';
import { updateCheckedWords } from './update-checked-words';
import { convertToText } from '../components/convert-to-text';

const overusedWordsListRef = document.querySelector('.overused-words-list');
const highlightedOverusedWordsRef = document.querySelector('#highlighted-overused-words');
const textAreaRef = document.querySelector('#text-area');

let textInput;

export function addNewOverusedWords(overusedWords, checkedWords) {

    // Remove all overused words from the list to later reconstruct that list 
    while (overusedWordsListRef.hasChildNodes()) {
        overusedWordsListRef.removeChild(overusedWordsListRef.firstChild);
    }

    overusedWords.forEach(word => {
        // Create elments
        const listItem = document.createElement('li'); // Container
        const inputElement = document.createElement('input');  // Input checkbox
        const spanElement = document.createElement('span'); // Custom checkbox
        const spanRemoveElement = document.createElement('span'); // Remove Word

        // Add event listener to each word selected/added by the user with the option to remove the word from the list
        spanRemoveElement.addEventListener('click', event => {
            textInput = convertToText(textAreaRef.innerHTML);
            removeOverusedWord(overusedWords, checkedWords, highlightedOverusedWordsRef, event.target, textInput);
            event.preventDefault();
        });
        // Highlight overused word in textarea
        inputElement.addEventListener('change', event => {
            textInput = convertToText(textAreaRef.innerHTML);
            updateCheckedWords(checkedWords, highlightedOverusedWordsRef, event.target, textInput);
            event.preventDefault();
        });

        // Create text nodes
        const labelTextNode = document.createTextNode(word);
        // Append text nodes
        listItem.appendChild(labelTextNode);
        // Append input checkbox, custom checkbox, icon into label container
        listItem.appendChild(inputElement);
        listItem.appendChild(spanElement);
        listItem.appendChild(spanRemoveElement);
        // Set attr
        listItem.setAttribute('id', word);
        inputElement.setAttribute('type', 'checkbox');
        inputElement.setAttribute('class', 'checkbox');
        spanRemoveElement.setAttribute('class', 'remove');
        spanElement.setAttribute('class', 'check-mark');

        // The list is reconstructed that is why we need to recheck words that were checked already
        if (checkedWords.includes(word)) {
            inputElement.setAttribute('checked', '');
        }

        overusedWordsListRef.appendChild(listItem);
    });
};