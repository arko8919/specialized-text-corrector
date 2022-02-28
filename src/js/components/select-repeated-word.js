import { highlightRepeatedWordListItem } from './highlight-repeated-word-list-item';
import { highlightSelectedRepeatedWord } from './highlight-selected-repeated-word';


export function selectRepeatedWord(target, repeatedWord, repeatedWordsListItems, highlightedRepeatedWordsRef, textAreaValue) {
    // If a repeated word is inactive and was clicked, change state to active
    if (target.className !== 'active') {
        // Highlight repeated word in text area
        highlightedRepeatedWordsRef.innerHTML = highlightSelectedRepeatedWord(repeatedWord, textAreaValue);
        // Set word to active in the repeated words list
        highlightRepeatedWordListItem(repeatedWordsListItems, repeatedWord);
        // Set state of clicked word
        return {
            highlighted: true,
            currentWord: repeatedWord
        };

    } else {
        target.className = '';
        // Set word to inactive in the repeated words list
        highlightedRepeatedWordsRef.innerHTML = textAreaValue;
        // Set state of clicked word
        return {
            highlighted: false,
            currentWord: ''
        };
    }
};