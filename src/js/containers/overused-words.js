import { newOverusedWords } from '../components/new-overused-words';
import { addSuggestedOverusedWords } from '../components/add-suggested-overused-words';

const cvOverusedWordsListRef = document.querySelector('.cv-overused-words');
const commonOverusedWordsListRef = document.querySelector('.common-overused-words');


// List of words ( maybe give it a seperate module ??? )
const state = {
    overusedWords: [],
    checkedWords: [], // Words that are selected by the user to find in the input
    cvOverusedWords: ['passionate', 'creative', 'driven', 'responsible', 'strategic', 'organizational', 'expert'], // This are suggested oversued words for CV
    commonOverusedWords: ['other', 'more', 'new', 'good', 'best', 'many', 'important', 'great', 'first', 'able'] // This are common suggested oversued words
};

export function overusedWords() {
    // Merge lists of CV and common overused words
    const suggestedWords = state.commonOverusedWords.concat(state.cvOverusedWords);
    // Add these words into a "Add words" section on page
    // Add new words into CV overused words list
    addSuggestedOverusedWords(state.overusedWords, state.checkedWords, state.cvOverusedWords, cvOverusedWordsListRef);
    // Add words into common overused words list 
    addSuggestedOverusedWords(state.overusedWords, state.checkedWords, state.commonOverusedWords, commonOverusedWordsListRef);

    // New words added by the user
    newOverusedWords(state.overusedWords, state.checkedWords);

    return state.checkedWords;
};

