"use strict";
function getPropertyValue(obj, key) {
    return obj[key];
}
// Функция getPropertyValue принимает 2 аргумента:
// Объект и ключ свойства этого объекта, который
// необходимо вернуть. Типизируйте данную функцию
// таким образом чтобы код ниже вызвал ошибку только
// в том случае когда у объекта нет указанного
// свойства (второй вызов).
const car = {
    brand: 'Ford',
    model: 'Mustang',
    yearOfIssue: 1967,
    engine: 'V8',
    hp: 115,
};
getPropertyValue(car, 'brand');
getPropertyValue(car, 'nickname');
