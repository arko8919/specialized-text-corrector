import { getStringData } from '../ui/get-string-data';
import { highlightOverusedWords } from '../overused-words/highlight-overused-words';
import { createRepeatedWordsList } from './create-repeated-words-list';
import { convertToText } from '../text-processing/convert-to-text';
import { convertOnPaste } from '../text-processing/convert-on-paste';
import { dom } from '../state/dom-references';
import { state } from '../state/state';

/**
 * Processes text input and updates UI.
 */
function processTextInput() {
    const textInput = convertToText(dom.textArea.innerHTML);

    // Create new list of repeated words each time there is change in textarea
    createRepeatedWordsList(textInput);

    // Highlight overused words
    dom.highlightedOverusedWords.innerHTML = highlightOverusedWords(
        textInput,
        state.checkedWords
    );

    // Get text statistics
    const { wordCount, sentenceCount, characterCount } =
        getStringData(textInput);

    // Update text statistics UI
    const [wordEl, sentenceEl, charEl] = dom.stringData;
    wordEl.textContent = wordCount;
    sentenceEl.textContent = sentenceCount;
    charEl.textContent = characterCount;
}

/**
 * Initializes event listeners for text processing.
 * - Adds listeners for user input and pasting text.
 * - Prevents duplicate event bindings.
 */
export function manageRepeatedWords() {
    if (!dom.textArea) return;

    // Check if the event listeners have already been added to prevent duplicates
    if (!dom.textArea.dataset.listener) {
        dom.textArea.addEventListener('paste', convertOnPaste);
        dom.textArea.addEventListener('input', processTextInput);
        dom.textArea.dataset.listener = 'true';
    }
}
