const textAreaE1 = document.querySelector('#textarea');
const totalCharacterE1 = document.querySelector('#total-counter');
const remainingCharacterE1 = document.querySelector('#remaining-counter');

// Adding eventListerner when key is pressed into text-area Section
textAreaE1.addEventListener('keyup', ()=> {
    updateCounter();
});

// when user first come reset the valu by calling the function first
updateCounter();

function updateCounter () {// finding the value of text area and send to totalCharacter
    totalCharacterE1.innerText = textAreaE1.value.length;

// finding the remaing value
    remainingCharacterE1.innerText = textAreaE1.getAttribute('maxLength') - textAreaE1.value.length;
};