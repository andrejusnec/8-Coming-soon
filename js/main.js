import { renderSocials } from "./components/social/renderSocials.js";
import { socialsData } from './data/socialsData.js';
import { renderClock } from './components/social/clock/renderClock.js'

renderSocials('footer > .row', socialsData);

renderClock('.clock');