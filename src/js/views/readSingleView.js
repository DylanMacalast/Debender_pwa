import { elements } from './base';

// render a single item onto the page
export const renderSingleItem = (readSingle) => {
    const markup = `
       <p class="single__p--message">You Must Now All <strong>${readSingle.title}</strong>!</p> 
       <h1>Have Fun</h1>
    `;
    elements.singleItem.insertAdjacentHTML('afterbegin', markup);
}

// gets the id from target element that was clicked
export const getItemId = (eventId) => {
    let id = eventId;
    id = id.replace('item-', '');
    id = parseInt(id);
    return id;
}
