import { addNewOverusedWords } from './add-new-overused-words';

// Creates new elements and add them to the DOM 
// The third parameter is "CV" or "Common" suggested overused words list
// The fourth parameter is a reference to that list in DOM
export function addSuggestedOverusedWords(overusedWords, checkedWords, suggestedWords, wordsListRef) {
    suggestedWords.forEach(word => {
        // Create elements
        const listItem = document.createElement('li');
        const button = document.createElement('button');

        // If the user chooses a suggested overused word and this word is not on the list, the suggested word will be added to the list of overused words 
        button.addEventListener('click', event => {
            // If the word is not in the array of overused words, add them
            if (!overusedWords.includes(word)) {
                overusedWords.push(word);
                // Add overused words to the list on page
                addNewOverusedWords(overusedWords, checkedWords);
            }
            event.preventDefault();
        });

        // Create text nodes
        const listItemText = document.createTextNode(word);
        const buttonText = document.createTextNode('add');

        // Add text node into created element
        listItem.appendChild(listItemText);
        button.appendChild(buttonText);

        // Add attribute
        button.setAttribute('class', 'material-icons predefined-words btn');

        // Add button as child of list item
        listItem.appendChild(button);

        // Add new words to the list
        wordsListRef.appendChild(listItem);
    });
};