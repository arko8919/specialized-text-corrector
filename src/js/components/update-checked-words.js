import { highlightCheckedOverusedWords } from './highlight-checked-overused-words';

export function updateCheckedWords(checkedWords, highlightedOverusedWordsRef, target, textAreaValue) {
    if (target.checked) {
        // Get label element content
        // If the user check an overused word add it to the checked words list
        checkedWords.push(target.parentElement.id);
    } else {
        // Delete checked word from the  if the user decided to uncheck
        for (let i = checkedWords.length - 1; i >= 0; i--) {
            if (checkedWords[i] === target.parentElement.id) {
                checkedWords.splice(i, 1);
                break;
            }
        }
    }

    // Text area has 3 layers, text-area which is input from user, div for overused words, and div for repeated words
    // Update the words highlighting in overused words layer 
    highlightedOverusedWordsRef.innerHTML = highlightCheckedOverusedWords(checkedWords, textAreaValue);
};
