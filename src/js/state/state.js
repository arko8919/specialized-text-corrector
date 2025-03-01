/**
 * Global state object to manage overused words and their categories.
 * This module serves as a central store for word lists used across multiple components.
 */
export const state = {
    overusedWords: [], // Stores all overused words
    checkedWords: [], //  Stores words selected by the user for highlighting in the textarea
    highlighted: false,
    currentWord: '',

    // List of overused words commonly found in CVs
    cvOverusedWords: [
        'passionate',
        'creative',
        'driven',
        'responsible',
        'strategic',
        'organizational',
        'expert',
    ],

    // List of commonly overused words in general writing
    commonOverusedWords: [
        'other',
        'more',
        'new',
        'good',
        'best',
        'many',
        'important',
        'great',
        'first',
        'able',
    ],
};
