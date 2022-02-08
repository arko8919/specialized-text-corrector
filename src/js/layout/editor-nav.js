
const editAreaSectionsRef = document.querySelector('.edit-area-sections');
const underlineRef = document.querySelector('.underline');

export function editorNav(event, menuBtnRef) {

    // Remove class .active from buttons
    menuBtnRef.forEach(button => {
        button.classList.remove('active');
    });

    // Add class 'active' to clicked editor nav button
    event.target.classList.add('active');

    // Get value from value attr a use it to switch to current choose section
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

