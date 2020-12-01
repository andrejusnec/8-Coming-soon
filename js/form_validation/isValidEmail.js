function isValidEmail(email) {
    const maxEmailLength = 50;
    if (typeof email !== 'string') {
        return 'Email turi buti teksto tipo';
    }
    if (email === '') {
        return 'Email negali buti tuscias';
    }
    if (email.length > maxEmailLength) {
        return `Email pastas negali buti per ilgas ${maxEmailLength} simnoliu.
        (virsytas ${email.length - maxEmailLength} simboliu.)`
    }

}
export { isValidEmail }