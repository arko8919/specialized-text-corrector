export function highlightRepeatedWordListItem(repeatedWordsListItems, currentWord) {
    // Run through all repeated words on the list and match repeated word from the list with the current active ( highlighted ) word
    for (let index = 0; index < repeatedWordsListItems.length; index++) {
        const content = repeatedWordsListItems[index].textContent;
        // Match any string and return array with that string (content of list item in DOM is (word : count))
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