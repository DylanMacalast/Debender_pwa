import { elements } from './base';

export const renderSeshItems = (readRandom) => {

    const markup = `
        <span class="items__span">
            <h4 class="items__title" id="item-${readRandom.ID}">${readRandom.Title}</h4>
        </span>
    `;

    elements.randomItems.insertAdjacentHTML('afterbegin', markup);
}

