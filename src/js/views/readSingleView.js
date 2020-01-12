import { elements } from './base';

export const renderSingleItem = (readSingle) => {
    const markup = `
       <p class="single__p--message">You Must Now All <strong>${readSingle.Title}</strong>!</p> 
       <h1>Have Fun</h1>
    `;
}


// TODO: figure out a better way of doing this!
export const getSeshItemId = () => {

    elements.body.addEventListener('click',  function(event)  {
        //event.target is clicked element
       if (!event.target) {return; } 

        if (event.target.matches('.items__title')) {
            let id = event.target.id;
            id = id.replace('item-', '');
            id = parseInt(id);
            return id;
        } 
        

    });

}
