export const requiredField = value => {

    if(value) return undefined;
    return 'Обязательное поле';   
}

export const maxLength30 = value => {

    if(value && value.length > 30) return 'Максимально 30 символов';
    return undefined;
}
// создаем санку для универсальности по максимальному числу символов
//и вызываем в месте подключения валидаторов maxLengthCreator(maxLength)
export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Максимально ${maxLength} символов`;
    return undefined;
}