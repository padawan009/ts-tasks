"use strict";
// Измените тип аргумента data в функции formattedUserData
// таким образом чтобы ее вызов ниже не вызывал ошибку
function formattedUserData(data) {
    return `
      Имя: ${data.firstName};
      Фамилия: ${data.lastName};
      Возраст: ${data.age};
      Родной город: ${data.hometown};
    `;
}
console.log(formattedUserData({
    firstName: 'Амир',
    age: 25,
    hometown: 'Грозный',
}));
