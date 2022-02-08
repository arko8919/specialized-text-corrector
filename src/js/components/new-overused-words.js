import { addNewOverusedWords } from './add-new-overused-words';
import { splitTextIntoWords } from './split-text-into-words';

const addOverusedWordsBtnRef = document.querySelector('#add');
const oversuedWordsInputRef = document.querySelector('#input');

export function newOverusedWords(overusedWords, checkedWords) {
    // When clicked add new words to the list
    addOverusedWordsBtnRef.addEventListener('click', event => {
        // Split text sequence into lowercase words base on passed regex
        // There is especially necessary if there is more than one word in the input
        const words = splitTextIntoWords(/,\s*|\s+/g, oversuedWordsInputRef.value);
        // Filters words to make sure that words are unique
        let uniqueOverusedWords = [...new Set(words)];
        // Filters words to make sure that words are not repeating
        const filteredOverusedWords = uniqueOverusedWords.filter(word => !overusedWords.includes(word));
        // Add words to overused words array
        filteredOverusedWords.forEach(word => overusedWords.push(word));
        // Add overused words to the list on page
        addNewOverusedWords(overusedWords, checkedWords);
        // Reset value
        oversuedWordsInputRef.value = '';
        // Prevent from resetting overused words list 
        event.preventDefault();
    });
};