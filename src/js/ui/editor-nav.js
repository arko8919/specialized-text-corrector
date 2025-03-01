// Reference to the sections container ( text-input , words-input, info & faq )
const editAreaSectionsRef = document.querySelector('.edit-area-sections');

// Reference to element with "underline" class
const underlineRef = document.querySelector('.underline');

export function editorNav(event) {
    const selectedButton = event.target;

    // Ensure the clicked element is a .menu-btn
    if (!selectedButton.classList.contains('menu-btn')) return;

    // Get all menu buttons (query once)
    const menuBtnRef = document.querySelectorAll('.menu-btn');

    // Remove '.active' class from all buttons
    menuBtnRef.forEach((button) => button.classList.remove('active'));

    // Add '.active' class to the clicked button
    selectedButton.classList.add('active');

    // Get the selected menu option from the 'value' attribute
    const selectedValue = selectedButton.getAttribute('value');

    // Define class mappings for styling updates
    const classMap = {
        textarea: 'underline-textarea',
        words: 'underline-words',
        faq: 'underline-faq',
    };

    // Update underline and section styles based on selected value
    if (classMap[selectedValue]) {
        underlineRef.className = `underline ${classMap[selectedValue]}`;
        editAreaSectionsRef.className = `edit-area-sections ${selectedValue}`;
    }
}
