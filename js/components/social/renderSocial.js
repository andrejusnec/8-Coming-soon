import { inputValidation } from "./social/inputValidation.js"
function renderSocial(data) {
    //input validation
    

    //logic
    const socialDOM = document.querySelector('footer > .row');
    let HTML = '';
    for(let i = 0; i < data.length; i++) {
        const item = data[i];
         if(typeof item !== 'object') {
             continue;
         }
         if(typeof item.link !== 'string' || typeof item.link === '') {
             continue;
         }
         if(typeof item.icon !== 'string' || typeof item.icon === '') {
             continue;
         }
        HTML += `<a href="${item.link}" target="_blank"
        class="fa fa-${item.icon}" aria-hidden="true"></a>`
    }
    //post logic validation
    if (HTML === '') {
         console.log("Error: nepavyko sugeneruoti");
         return false;
    }


    //return
    socialDOM.innerHTML = HTML;
    return true;
}
export { renderSocial }
