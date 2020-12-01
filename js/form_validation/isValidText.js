function isValidText(text) {
    const maxTextLength = 1000;
    if (typeof text !== 'string') {
        return 'Tekstas turi buti teksto tipo';
    }
    if (email === '') {
        return 'Tekstas negali buti tuscias';
    }
    if (email.length > maxEmailLength) {
        return `Tekstas negali buti ilgesnis nei ${maxTextLength} simnoliu.
        (virsytas ${text.length - maxTextLength} simboliu.)`
    }

}
export { isValidText }