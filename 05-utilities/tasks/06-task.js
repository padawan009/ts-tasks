"use strict";
const somePerson = {
    firstName: 'Антон',
    lastName: 'Иванов',
    age: 33,
    hometown: 'Москва',
    isMarried: false,
};
// Не меняя интерфейс IPerson измените тип somePerson
// таким образом чтобы код ниже не вызывал ошибок.
somePerson.firstName = 'Семен';
somePerson.lastName = 'Журавлев';
somePerson.hometown = 'Петербург';
