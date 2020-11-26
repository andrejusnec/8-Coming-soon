//selector
//Target date is New Year evening 2020 12 31 23:59:59// 2021 01 01 00:00:00
/**
 * Generuoja statini laikrodi, kuris rodo kiek laiko liko iki nauju metu
 * @param {string} selector CSS taisykle, kaip rasti vieta, 
 * kur bus generuojamas laikrodzio HTML turinys
 * @returns {boolean} Jei funkcija sekmingai ivykdo savo darba, tai grazina `true`, kitu atbeju `false`
 */
function renderClock(selector) {
    const DOM = document.querySelector(selector);
    if( typeof selector !== 'string') {
        console.log("ERROR: Selector turi buti String tipo")
        return false;
    }
    if (selector === ''){
        console.log('ERROR: Ei... Cia nieko nera! Ivesk reiksme!');
    }
    if (!DOM) {
        console.log("ERROR: Nera vietos laikrodzio html turinije");
        return false;
    }
    // current year (2020)
    const date = new Date();
    const currYear = date.getFullYear();
    //newyear = current + 1
    const newYear = currYear + 1;
    // sukonstruojame pilna data: ${naujakas}-01-01 00:00:00
    const newYearDate = `${newYear}-01-01 00:00:00`;
    const newYearObject = new Date(newYearDate);
    const newYearMilis = newYearObject.getTime();
    //eianamasis laikas yyyy -mm- dd hh:mm:ss
    const currentTimeMilis = date.getTime();
    //suskaiciojame laiko skirtuma
    const timeLeft = newYearMilis - currentTimeMilis;
    let secLeft = timeLeft / 1000;
    //is skirtumo apskaiciojame likusias dienas, valandas, min ir sec
    
    const day = Math.floor(secLeft/60/60/24);
    secLeft -= day * 60 * 60 * 24;
    const hour = Math.floor(secLeft /60/60);
    secLeft -= hour * 60 * 60 ;
    const min = Math.floor(secLeft/60);

    const sec = Math.floor(secLeft - min * 60);
    const HTML = `
    <div class="columas">
        <div class="number">${day}</div>
        <div class="time">Days</div>
    </div>
    <div class="columas">
        <div class="number">${hour}</div>
        <div class="time">Hours</div>
    </div>
    <div class="columas">
        <div class="number">${min}</div>
        <div class="time">Minutes</div>
    </div>
    <div class="columas">
        <div class="number">${sec}</div>
        <div class="time">Seconds</div>
    </div>`;
    DOM.innerHTML = HTML;
    return true;
}
export { renderClock }
