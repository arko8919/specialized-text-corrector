
// Reference to the sections container ( text-input , words-input, info & faq )
const editAreaSectionsRef = document.querySelector('.edit-area-sections');
// Reference to element with "underline" class
const underlineRef = document.querySelector('.underline');

// The sections and underline position on-page changes, depending on the option selected from the menu

export function editorNav(event, menuBtnRef) {
    // Remove class '.active' from button before choosing the different menu option
    menuBtnRef.forEach(button => {
        button.classList.remove('active');
    });

    // Add class '.active' to clicked editor menu option
    event.target.classList.add('active');

    // Get a value from the value attribute and add/update styling classes, 
    // to move the position of the underline and section to that, matching the current chosen menu option  
    const valueAttr = event.target.getAttribute('value');
    
    if (valueAttr === 'textarea') {
        underlineRef.className = 'underline underline-textarea';
        editAreaSectionsRef.className = 'edit-area-sections textarea';
    } else if (valueAttr === 'words') {
        underlineRef.className = 'underline underline-words';
        editAreaSectionsRef.className = 'edit-area-sections words';
    } else if (valueAttr === 'faq') {
        underlineRef.className = 'underline underline-faq';
        editAreaSectionsRef.className = 'edit-area-sections faq';
    }
};

