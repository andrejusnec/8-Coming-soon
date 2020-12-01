function isValidProgressBarList(list) {
    if(!Array.isArray(list)) {
        console.log('Wooops!: Turim Problema: Turi buti array tipo duomenys');
        return false;
    }
    if(list.length === 0) {
        console.log('Wooops!: Turim Problema: Sarasas negali buti tuscias');
        return false;
    }
    return true;
}
export { isValidProgressBarList }