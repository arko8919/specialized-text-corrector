import { highlightCheckedOverusedWords } from './highlight-checked-overused-words';

export function removeOverusedWord(overusedWords, checkedWords, highlightedOverusedWordsRef, target, textAreaValue) {
    const wordToRemove = target.parentElement.id;
    // If the overused word was checked during removing, remove it from the checked words list 
    checkedWords.forEach((word, index) => {
        if (checkedWords[index] === wordToRemove) {
            checkedWords.splice(index, 1);
        }
    });
    // Remove word from the overused words list
    overusedWords.forEach((word, index) => {
        if (overusedWords[index] === wordToRemove) {
            overusedWords.splice(index, 1);
        }
    });
    // Remove list item from the overused words list
    target.parentElement.remove();
    // Update textarea with highlighted overused words
    highlightedOverusedWordsRef.innerHTML = highlightCheckedOverusedWords(checkedWords, textAreaValue);
};