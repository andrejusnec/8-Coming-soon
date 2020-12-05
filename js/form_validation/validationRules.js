import { isValidName } from './isValidName.js';
import { isValidEmail } from './isValidEmail.js';
import { isValidText } from './isValidText.js';

// Validation objekto key (raktazodziai) specialiai sutampa 
// su terminais naudojamais HTML formose esanciuose data-validation reiksmese
const validation = {
    email: isValidEmail,
    text: isValidText,
    name: isValidName
}

export { validation }