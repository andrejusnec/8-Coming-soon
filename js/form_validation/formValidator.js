import { validation } from './validationRules.js';
/**
 * Formos validavima atliekanti funkcija, kuri automatiskai atpazysta kokiems ivestiems 
 * laukams reikia taikyti validacijos taisykles ir pagal tai atvaizduoja pranesimus Succes/Error
 * @param {string} selector CSS like selectorius
 * @param {Object} validator Objektas i kuri reikia kreiptis, norint atvaizduoti pranesimus. Sekmes ir nesekmes atveju
 * @returns {boolean} funkcijai sekmingai suveikus grazina true, priesingu atveju false
 */

function formValidator(selector, toastObject) {
    const formDOM = document.querySelector(selector);
    const submitBtnDOM = formDOM.querySelector('input[type="submit"]');



    if (!submitBtnDOM) {
        toastObject.show('error', 'Woops! Formoje nerasta input:submit mygtukas.')
        return false;
    }

    const allInputDOMs = formDOM.querySelectorAll('input:not([type="submit"])');
    const allTextareaDOMs = formDOM.querySelectorAll('textarea');

    const allElements = [...allInputDOMs, ...allTextareaDOMs]; //  du sarasus sukeliu i viena - ir isskelidziu ju turini

    if (allElements.length === 0) {
        toastObject.show('error', 'Woops! Formoje nerasta nei vieno input ar texarea elemento');
        return false;
    }
    console.log(allElements)

    submitBtnDOM.addEventListener('click', event => {
        event.preventDefault();
        let errorCount = 0;

        for (let input of allElements) {
            const validationRule = input.dataset.validation;
            const text = input.value;

            const validationFunction = validation[validationRule];
            const error = validationFunction(text);
            if (error !== true) {
                toastObject.show('error', error);
                errorCount++;
                break; // Sustabdo cikla, kad iskartp parodytu klaida
            }
        }
        if (errorCount === 0) {
            toastObject.show('success', 'Siumciam info...')
        }
    })
    return true;
}
export { formValidator }