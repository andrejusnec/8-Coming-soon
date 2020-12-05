function isValidSingleProgressBar(progressBar) {
    if (typeof progressBar !== 'object') {
        console.log('Wooops!: Turim Problema: Turi buti objektas');
        return false;
    }
    if (!progressBar.selector || typeof progressBar.selector !== 'string' || progressBar.selector === '') {
        console.log('Wooops!: Turim Problema: Objekto selector parametras turi buti buti ne tuscias tekstas');
        return false;
    }
    if (!progressBar.title || typeof progressBar.title !== 'string' || progressBar.title === '') {
        console.log('Wooops!: Turim Problema: Objekto title parametras turi buti buti ne tuscias tekstas');
        return false;
    }
    if(!progressBar.value || typeof progressBar.value !== 'number' || progressBar.value < 0 ||
        progressBar.value > 100 || progressBar.value % 1 !== 0) {
            console.log('Wooops!: Turim Problema: Objekto value parametras turi buti sveikas skaicius nuo 1 iki 100.');
            return false;
        }
        return true;
}
export { isValidSingleProgressBar }