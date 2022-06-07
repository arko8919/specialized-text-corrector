// Styles
import './style.scss';

// Scripts
import { editorNav } from './js/layout/editor-nav';
import { repeatedWords } from './js/containers/repeated-words';
import { overusedWords } from './js/containers/overused-words';

// Editor navigation menu Reference
const menuBtnRef = document.querySelectorAll('.menu-btn');

// Change sections on menu button click ( sections >>> textarea, add words, faq )
Array.from(menuBtnRef, button => button.addEventListener('click', event => {
    editorNav(event, menuBtnRef);
}));

// Containing all functionality responsible for overused words 
// Return list of marked overused words by user
const checkedWords = overusedWords();
// Containing all functionality responsible for repeated words
repeatedWords(checkedWords);
