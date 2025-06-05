"use strict";
// 1. Опиши типизацию юзера
// 2. Замени все unknown описанным типом
// 3. Проверь работоспособность кода
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.logPerson = logPerson;
exports.users = [
    {
        name: 'Антон',
        age: 25,
        occupation: 'Водитель',
    },
    {
        name: 'Амир',
        age: 23,
        occupation: 'Программист',
    },
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
console.log('Users:', exports.users);
exports.users.forEach(logPerson);
