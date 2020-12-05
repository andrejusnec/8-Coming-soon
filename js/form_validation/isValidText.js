function isValidText(text) {
    const maxTextLength = 1000;
    if (typeof text !== 'string') {
        return 'Tekstas turi buti teksto tipo';
    }
    if (text === '') {
        return 'Tekstas negali buti tuscias';
    }
    if (text.length > maxTextLength) {
        return `Tekstas negali buti ilgesnis nei ${maxTextLength} simnoliu.
        (virsytas ${text.length - maxTextLength} simboliu.)`
    }
    return true;
}
export { isValidText }