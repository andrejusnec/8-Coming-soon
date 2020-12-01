import { countTimeDiff } from './countTimeDiff.js';

// Target date is New Year evening. 
// 2021-01-01 00:00:00

/**
 * Generuoja statini laikrodi, kuris rodo kiek liko laiko iki artimiausiu Naujuju metu
 * @param {string} selector CSS taisykle, kaip rasti vieta, kur bus generuojamas laikrodzio HTML turinys
 * @returns {boolean} Jei funkcija sekmingai ivykdo savo funkcionaluma, tai grazina `true`, priesingu atveju - `false`
 */
function renderClock(selector) {
    if (typeof selector !== 'string') {
        console.error('ERROR: selectorius turi buti tekstinio tipo');
        return false;
    }
    if (selector == '') {
        console.error('ERROR: selectorius negali buti tuscias tekstas');
        return false;
    }
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerasta vieta, kur sugeneruoti laikrodzio HTML turini');
        return false;
    }

    const time = countTimeDiff();

    const HTML = `
    <div class="columas">
        <div class="time">${time.days}</div>
        <div class="number">Days</div>
    </div>
    <div class="columas">
        <div class="time">${time.hours}</div>
        <div class="number">Hours</div>
    </div>
    <div class="columas">
        <div class="time">${time.minutes}</div>
        <div class="number">Minutes</div>
    </div>
    <div class="columas">
        <div class="time">${time.seconds}</div>
        <div class="number">Seconds</div>
    </div>`;

    DOM.innerHTML = HTML;
    const timesDOM = DOM.querySelectorAll('.time');

    // paleidziame laikrodzio mechanizka
    let timePassed = 0;

    setInterval(() => {
        const time = countTimeDiff();
        timesDOM[0].innerText = time.days;
        timesDOM[1].innerText = time.hours;
        timesDOM[2].innerText = time.minutes;
        timesDOM[3].innerText = time.seconds;
    }, 1000);

    return true;
}

export { renderClock }
