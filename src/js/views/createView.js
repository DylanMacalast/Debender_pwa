import { elements } from './base';

export const openPopup = () => {
    elements.createButton.addEventListener("click", function(){
       elements.popupBox.classList.toggle('popup__div--hide'); 
    });
}
