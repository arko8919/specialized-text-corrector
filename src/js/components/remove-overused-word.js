import { highlightCheckedOverusedWords } from './highlight-checked-overused-words';

export function removeOverusedWord(overusedWords, checkedWords, highlightedOverusedWordsRef, target, textAreaValue) {
    const wordToRemove = target.parentElement.id;
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