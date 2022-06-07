import { highlightCheckedOverusedWords } from './highlight-checked-overused-words';

export function updateCheckedWords(checkedWords, highlightedOverusedWordsRef, target, textAreaValue) {
    if (target.checked) {
        // If the user mark an overused word, add it to the 'checkedWords' array
        checkedWords.push(target.parentElement.id);
    } else {
        // Delete checked word from the 'checkedWords' array if the user decided to unmark
        for (let i = checkedWords.length - 1; i >= 0; i--) {
            if (checkedWords[i] === target.parentElement.id) {
                checkedWords.splice(i, 1);
                // The overused words in the list are never repeated, so stop looking any further
                break;
            }
        }
    }

    // Text area has 3 layers:
    // 1: div element with 'contenteditable' attribute in which user enter input
    // 2: div element for highlighting overused words, 
    // 3: div element for highlighting repeated words
    // Update the words highlighting in overused words layer 
    highlightedOverusedWordsRef.innerHTML = highlightCheckedOverusedWords(checkedWords, textAreaValue);
};
