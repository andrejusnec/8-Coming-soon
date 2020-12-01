import { isValidSingleProgressBar } from './isValidSingleProgressBar.js';
/**
 * 
 * @param {string} selector CSS tipo selectorius, kaip rasti vieta,kur sugeneruoti turini
 * @param {string} title PRogress baro pavadinimas
 * @param {number} value PRrogress baro reiksme %
 * @returns {boolean} Funkcijai suveikus grazina true
 */
function renderProgressBar(selector, title, value) {
    if (!isValidSingleProgressBar({ selector, title, value })) {
        return false;
    }

    const HTML = ` <div class="progress-bar">
    <div class="top">
        <div class="label">${title}</div>
        <div class="value">${value}%</div>
    </div>
    <div class="bottom">
        <div class="bar" style="width: ${value}%;">
            <div class="loader"></div>
        </div>
    </div>
</div>`;
    const DOM = document.querySelector(selector)
    if (!DOM) {
        console.log('Wooops!: Turim problema: Nerasta nurodyta vieta');
        return false;
    }

    DOM.insertAdjacentHTML('beforeend', HTML)
    return true;
}
export { renderProgressBar }