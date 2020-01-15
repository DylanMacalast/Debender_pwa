import { elements } from './base';

export const openPopup = () => {
    elements.createButton.addEventListener("click", function(){
       elements.popupBox.classList.toggle('popup__div--hide'); 
    });
}


export const renderMessage = () => {
   let markup;     
    if(elements.input.value == ''){
    markup = `
    <p class="popup__p--message">Sesh Item Cannot be Nothing</p>
   `;
    } else {
    markup = `
    <p class="popup__p--message">Sesh Item Created Succesfully</p>
   `;
    }
    // change elements
    elements.popupBox.insertAdjacentHTML('afterBegin', markup);
    // hide everything else in popup box
    elements.input.style.display = "none";
    elements.submitButton.style.display = "none";
    elements.popupText.style.display = "none";
    
}


// need to make the exit button work for pop up box
const closeBox = () => {
    elements.closeButton.addEventListener("click", function(){
       elements.popupBox.classList.toggle('popup__div--hide'); 
    });

}


