import { highlightRepeatedWordListItem } from './highlight-repeated-word-list-item';
import { highlightSelectedRepeatedWord } from './highlight-selected-repeated-word';


export function selectRepeatedWord(target, repeatedWord, repeatedWordsListItems, highlightedRepeatedWordsRef, textAreaValue) {
    // If a repeated word is inactive and was clicked, change state to active
    if (target.className !== 'active-repeated-word') {
        // Highlight repeated word in text area
        highlightedRepeatedWordsRef.innerHTML = highlightSelectedRepeatedWord(repeatedWord, textAreaValue);
        // Set word to active
        highlightRepeatedWordListItem(repeatedWordsListItems, repeatedWord);
        // Set state of clicked word
        return {
            highlighted: true,
            currentWord: repeatedWord
        };

    } else {
        // Set word to inactive
        target.className = 'inactive-repeated-word';
        highlightedRepeatedWordsRef.innerHTML = textAreaValue;
        // Set state of clicked word
        return {
            highlighted: false,
            currentWord: ''
        };
    }
};