/*
  You would call this after getting an element's
  `.innerHTML` value, while the user is typing.
*/
export const convertToText = (str = '') => {
  // Ensure string.
  let value = String(str);

  // Convert encoding.
  value = value.replace(/&nbsp;/gi, ' ');
  value = value.replace(/&amp;/gi, '&');

  // Replace `<br>`.
  value = value.replace(/<br>/gi, '\n');

  // Replace `<div>` (from Chrome).
  value = value.replace(/<div>/gi, '\n');

  // Replace `<p>` (from IE).
  value = value.replace(/<p>/gi, '\n');

  // Remove extra tags.
  value = value.replace(/<(.*?)>/g, '');

  // Trim each line.
  value = value
    .split('\n')
    .map((line = '') => {
      return line.trim();
    })
    .join('\n');

  // No more than 2x newline, per "paragraph".
  value = value.replace(/\n\n+/g, '\n\n');

  // These lines are commented to make sure that highlighting on layers behind text area are matching the position of the word in text area, 
  // otherwise, if the user makes more than one white space, layers will ignore that extra spaces and words highlighting will be in wrong position
  // Clean up spaces
  // value = value.replace(/[ ]+/g, ' ');
  // value = value.trim();

  // Expose string.
  return value;
};
