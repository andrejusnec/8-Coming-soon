import { renderSocials } from "./components/social/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/social/clock/renderClock.js'

import { progressBarData } from './data/progressBarData.js';
import { renderAllProgressBars } from './progress-bar/renderAllProgressBars.js'

renderSocials('footer > .row', socialsData);

renderClock('.clock');

renderAllProgressBars(progressBarData);