import { renderSocials } from "./components/social/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/social/clock/renderClock.js'

import { progressBarData } from './data/progressBarData.js';
import { renderAllProgressBars } from './progress-bar/renderAllProgressBars.js';
import { formValidator } from '../js/form_validation/formValidator.js';

import { Toast } from './toast/Toast.js';

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);

const toast = new Toast();
toast.render();
toast.show('success', 'Buvo gera diena');
/*toast.hide('error', 'Cia yra klaida');*/

formValidator('.hero .form');
formValidator('main .form');