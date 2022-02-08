// Helpers.
import { convertToText } from './convert-to-text';

/*
  You would call this when receiving a plain text
  value back from an API, and before inserting the
  text into the `contenteditable` area on a page.
*/
export const convertToMarkup = (str = '') => {
  return convertToText(str).replace(/\n/g, '<br>');
};

// Export.
