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

    const allProgressBars = document.querySelectorAll('.progress-bar')

    console.log(allProgressBars);

    window.addEventListener('scroll', () => { //window nebutina rasyti
        const screenBottom = innerHeight + scrollY
        
        for(let bar of allProgressBars) {
            const barBottom = bar.offsetHeight + bar.offsetTop;
            if(screenBottom >= barBottom) {
            bar.classList.add('animate');       // prideda clase, remove atima, toggle - ir ta ir ana
            }
        }
    })

    return true;
}
export { renderAllProgressBars }