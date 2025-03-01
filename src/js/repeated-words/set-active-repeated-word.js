import { state } from '../state/state';
import { dom } from '../state/dom-references';

/**
 * Highlights the selected repeated word in the repeated words list.
 * - Ensures only one word is highlighted at a time.
 */
export function setActiveRepeatedWord() {
    if (!dom.repeatedWordsList || !state.currentWord) return;

    const repeatedWordsListItems = dom.repeatedWordsList.childNodes;

    repeatedWordsListItems.forEach((item) => {
        const matchedWord = item.textContent.split(':')[0].trim();

        if (matchedWord === state.currentWord) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
