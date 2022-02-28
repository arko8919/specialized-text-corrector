export function highlightRepeatedWordListItem(repeatedWordsListItems, currentWord) {
    // Find an active repeated word on the repeated words list
    for (let index = 0; index < repeatedWordsListItems.length; index++) {
        // Content of list item in DOM is 'word : count'
        const content = repeatedWordsListItems[index].textContent;

        // Match any string and return array with that string 
        const matched = content.match(/^\w+/);

        // Convert array to string
        const matchedWord = matched.toString();

        // If a current highlighted word is still on the list keep it state active otherwise remove the active state
        if (matchedWord === currentWord) {
            repeatedWordsListItems[index].className = 'active';
        } else {
            repeatedWordsListItems[index].removeAttribute("class");
        }
    }
};