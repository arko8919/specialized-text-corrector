import './style.scss';

import { editorNav } from './js/layout/editor-nav';
import { repeatedWords } from './js/containers/repeated-words';
import { overusedWords } from './js/containers/overused-words';

// Editor navigation menu Reference
const menuBtnRef = document.querySelectorAll('.menu-btn');

// const s2 = document.querySelector('#highlighted-repeated-words');
// const s3 = document.querySelector('#highlighted-overused-words');

// Changes sections on menu button click ( sections >>> textarea, add words, faq )
Array.from(menuBtnRef, button => button.addEventListener('click', event => {
    editorNav(event, menuBtnRef);
}));

// Containing all functions responsible for overused words and return checked overused words
const checkedWords = overusedWords();
// Containing all functions responsible for repeated words
repeatedWords(checkedWords);
