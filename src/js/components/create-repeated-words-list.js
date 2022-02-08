import { selectRepeatedWord } from './select-repeated-word';
import { highlightRepeatedWordListItem } from './highlight-repeated-word-list-item';
import { highlightSelectedRepeatedWord } from './highlight-selected-repeated-word';

const highlightedRepeatedWordsRef = document.querySelector('#highlighted-repeated-words');
const repeatedWordsListRef = document.querySelector('.repeated-words-list');
const repeatedWordsListItemsRef = repeatedWordsListRef.childNodes;

// Stores information about the last clicked repeated word and whether is highlighted or not
const state = {
    highlighted: false,
    currentWord: ''
};

export function createRepeatedWordsList(repeatedWords, textAreaWords, textAreaValue) {
    // Remove all repeated words from the list
    while (repeatedWordsListRef.hasChildNodes()) {
        repeatedWordsListRef.removeChild(repeatedWordsListRef.firstChild);
    }

    // Reset value of [ currentWord ] property, if the same word stored in [ currentWord ] property is removed from the text area
    if (!textAreaWords.includes(state.currentWord)) {
        state.currentWord = '';
    }

    // RepeatedWords array store arrays = [ word, count ]
    repeatedWords.forEach(repeatedWord => {
        // Create element 
        const createdListItemElement = document.createElement('li');
        // Highlight repeated word in textarea and in repeated words list
        createdListItemElement.addEventListener('click', event => {
            const newState = selectRepeatedWord(event.target, repeatedWord[0], repeatedWordsListItemsRef, highlightedRepeatedWordsRef, textAreaValue);
            // update state
            state.highlighted = newState.highlighted;
            state.currentWord = newState.currentWord;
            event.preventDefault();
        });
       // Text node with content from repeated words array
        const spanElementText = document.createTextNode(`${repeatedWord[0]} : ${repeatedWord[1]}`);
        createdListItemElement.appendChild(spanElementText);
        repeatedWordsListRef.appendChild(createdListItemElement);
    });

    // Keeps clicked repeated word or words in textarea highlighted, when input change
    if (state.highlighted) {
        highlightedRepeatedWordsRef.innerHTML = highlightSelectedRepeatedWord(state.currentWord, textAreaValue);
        highlightRepeatedWordListItem(repeatedWordsListItemsRef, state.currentWord);
    }
};