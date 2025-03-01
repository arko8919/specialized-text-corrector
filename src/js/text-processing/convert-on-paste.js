import { convertToText } from './convert-to-text';
/**
 * Handles text paste into a `contenteditable` area.
 * - Cleans pasted content and inserts plain text.
 *
 * @param {ClipboardEvent} event - The paste event.
 */
export function convertOnPaste(event) {
    event.preventDefault(); // Prevent default paste behavior

    // Extract clipboard data as plain text
    const clipboardData = event.clipboardData?.getData('text/plain') || '';

    // Convert to plain text (strip HTML, extra spaces, etc.)
    const cleanedText = convertToText(clipboardData);

    // Insert cleaned text at cursor position
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(cleanedText));

    // Move cursor to end of inserted text
    range.collapse(false);
}
