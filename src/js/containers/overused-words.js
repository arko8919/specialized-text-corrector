import { newOverusedWords } from '../components/new-overused-words';
import { addSuggestedOverusedWords } from '../components/add-suggested-overused-words';

// These are containers for suggested overused words
const cvOverusedWordsListRef = document.querySelector('.cv-overused-words');
const commonOverusedWordsListRef = document.querySelector('.common-overused-words');


// List of words { maybe give it a seperate module ??? Call this module in different modules when you need to update or retrieve data ??? }
const state = {
    overusedWords: [], // List of all overused suggested and custom words
    checkedWords: [], // Words that are marked & selected by the user in overused words list
    cvOverusedWords: ['passionate', 'creative', 'driven', 'responsible', 'strategic', 'organizational', 'expert'], // These are suggested overused words for CV
    commonOverusedWords: ['other', 'more', 'new', 'good', 'best', 'many', 'important', 'great', 'first', 'able'] // These are common suggested overused words  
};

export function overusedWords() {
    // Add new words into CV overused words list container
    addSuggestedOverusedWords(state.overusedWords, state.checkedWords, state.cvOverusedWords, cvOverusedWordsListRef);
    // Add words into common overused words list container
    addSuggestedOverusedWords(state.overusedWords, state.checkedWords, state.commonOverusedWords, commonOverusedWordsListRef);

    // New words added by the user
    newOverusedWords(state.overusedWords, state.checkedWords);

    return state.checkedWords;
};

