function inputValidation(data) {
    if(!Array.isArray(data)){ // !Array.isArray(data) = array.isArray === false
        console.log('ERROR: reikia array tipo duoenu');
        return false;
    }
    if(data.length === 0) {
        console.log('ERROR: social ikonom reikia ne tuscio array');
        return false;
    }
    return true;

}
export { inputValidation }