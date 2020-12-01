import { renderProgressBar } from './renderProgbar.js';
import { isValidSingleProgressBar } from './isValidSingleProgressBar.js';
import { isValidProgressBarList } from './isValidProgressBarsList.js';

/**
 * 
 * @param {Object[i]} data 
 * @param {string} data[].selector CSS tipo selectorius, kaip rasti vieta,kur sugeneruoti turini
 * @param {string} data[].title PRogress baro pavadinimas
 * @param {number} data[].value PRrogress baro reiksme %
 * @returns {boolean} Funkcijai suveikus grazina true
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarList(data)) {
        return false;
    }
    for (let i = 0; i < data.length; i++) {
        const bar = data[i];

        if (!isValidSingleProgressBar(bar)) {
            continue;
        }
        renderProgressBar(bar.selector, bar.title, bar.value);
    }
    return true;
}
export { renderAllProgressBars }