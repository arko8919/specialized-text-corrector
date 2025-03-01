// dom-references.js

export const dom = {
    textArea: document.querySelector('#text-area'),
    highlightedOverusedWords: document.querySelector(
        '#highlighted-overused-words'
    ),
    repeatedWordsList: document.querySelector('.repeated-words-list'),
    highlightedRepeatedWords: document.querySelector(
        '#highlighted-repeated-words'
    ),
    addOverusedWordsBtn: document.querySelector('#add'),
    overusedWordsInput: document.querySelector('#input'),
    cvOverusedWordsList: document.querySelector('.cv-overused-words'),
    commonOverusedWordsList: document.querySelector('.common-overused-words'),
    stringData: document.querySelectorAll('.string-data p span'),
};
