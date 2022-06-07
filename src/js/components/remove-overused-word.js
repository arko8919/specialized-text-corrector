import { highlightCheckedOverusedWords } from './highlight-checked-overused-words';

export function removeOverusedWord(overusedWords, checkedWords, highlightedOverusedWordsRef, target, textAreaValue) {
    // A parent element is a list item in which a span element with a "remove" class is contained 
    const wordToRemove = target.parentElement.id;

    // The splice () method makes a change inside the array
    // Maybe we should make a copy of array and leave the old array for backtracking

    // If the overused word was marked before removing, remove it from the 'checkedWords' array
    checkedWords.forEach((word, index) => {
        if (word === wordToRemove) {
            checkedWords.splice(index, 1);
        }
    });
    // Remove word from the 'overusedWords' array
    overusedWords.forEach((word, index) => {
        if (word === wordToRemove) {
            overusedWords.splice(index, 1);
        }
    });
    // Remove list item from the overused words list
    target.parentElement.remove();
    // Remove word highlight, if marked in text
    highlightedOverusedWordsRef.innerHTML = highlightCheckedOverusedWords(checkedWords, textAreaValue);
};