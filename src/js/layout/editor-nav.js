
// We store the reference to the container sections and the underline container. 
// The content page of the editor and position of the underline changes depending on the option selected from the menu
const editAreaSectionsRef = document.querySelector('.edit-area-sections');
const underlineRef = document.querySelector('.underline');

export function editorNav(event, menuBtnRef) {
    // Remove class '.active' from buttons to make sure no button is active before choosing the different menu option
    menuBtnRef.forEach(button => {
        button.classList.remove('active');
    });

    // Add class '.active' to clicked editor menu option
    event.target.classList.add('active');

    // Get a value from the value attribute and add/update styling classes, 
    // to move the position of the underline and content page to that, matching the current chosen menu option  
    const valueAttr = event.target.getAttribute('value');
    // Change between sections
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

