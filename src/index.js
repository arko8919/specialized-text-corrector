// Styles
import './style.scss';

// Scripts
import { editorNav } from './js/ui/editor-nav';
import { manageRepeatedWords } from './js/repeated-words/manage-repeated-words';
import { manageSuggestedWords } from './js/overused-words/manage-suggested-words';
import { manageOverusedWords } from './js/overused-words/manage-overused-words';

// Reference the parent container
const menuContainer = document.querySelector('.menu-container');

// Check if container exists before adding event listener
if (menuContainer) {
    menuContainer.addEventListener('click', editorNav);
}

manageSuggestedWords();
manageOverusedWords();
manageRepeatedWords();
