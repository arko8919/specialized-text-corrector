import { getStringData } from '../components/get-string-data';
import { highlightCheckedOverusedWords } from '../components/highlight-checked-overused-words';
import { countRepeatedWords } from '../components/count-repeated-words';
import { createRepeatedWordsList } from '../components/create-repeated-words-list';
import { splitTextIntoWords } from '../components/split-text-into-words';
import { convertToText } from '../components/convert-to-text';
import { convertOnPaste } from '../components/convert-on-paste';

const textAreaRef = document.querySelector('#text-area');
const highlightedOverusedWordsRef = document.querySelector('#highlighted-overused-words');
let textInput = '';

export function repeatedWords(checkedWords) {

    // You would call this when a user pastes from the clipboard into a `contenteditable` area.
    textAreaRef.addEventListener('paste', function (event) {
        textInput = convertOnPaste(event);
    });

    textAreaRef.addEventListener('input', event => {

        // You would call this after getting an element's `.innerHTML` value, while the user is typing.
        textInput = convertToText(textAreaRef.innerHTML);

        // Return array of words from input text area
        const textAreaWords = splitTextIntoWords(/\W+/, textInput);

        // Return counted and sorted repeated words as array
        const repeatedWords = countRepeatedWords(textAreaWords);

        // Adds repeating words to the list 
        createRepeatedWordsList(repeatedWords, textAreaWords, textInput);

        // Highlight already selected overused words
        highlightedOverusedWordsRef.innerHTML = highlightCheckedOverusedWords(checkedWords, textInput);

        // Displays the number of characters, words and sentences in the text sequence
        getStringData(textInput);

        event.preventDefault();
    });
};