function isValidName(name) {
    const maxNameLength = 50;
    if (typeof name !== 'string') {
        return 'Vardas turi buti teksto tipo';
    }
    if (name === '') {
        return 'Vardas negali buti tuscias';
    }
    if (name.length > 50) {
        return `Vardas negali buti daugiau nei ${maxNameLength} simboliu (virsyta ${name.length - maxNameLength} simboliu`
    }
    //Turi buti tik abeceles raides
    const abc = 'qwertyuiopasdfghjklzxcvbnm';
    for (let letter of name) {
        if (!abc.includes(letter.toLowerCase())) {
            return `ERROR: Varde panaudota neleistina raide (${letter})`
        }
    }
    //Jei gauto vardo raides pavertus mazosiomis yra ligu pradinei reiksmei, tai reikia, jog
    //vardas buvo vien tik is mazuju raidziu
    if (name.toLocaleLowerCase() === name) {
        return 'ERROR: Vardas negali buti vien tik is mazuju raidziu';
    }
    //Jei pagauname kad su Caps ivestas tekstas, grazina  turn off caps
    const realNameFormat = name[0].toUpperCase() + name.slice(1).toLocaleLowerCase();
    if (realNameFormat !== name) {
        return 'Varda turi sudaryti pirma didzioji raide ir kitos mazosios';
    }
    return true;
}
export { isValidName }