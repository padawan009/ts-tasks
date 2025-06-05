// 1. Функция formattedUserData принимает ряд
// аргументов и выводит форматированную
// информацию о пользователе. Опишите
// аргументы этой функции таким образом,
// чтобы в случае отсутствия информации
// о возрасте или родном городе, в
// информации о юзере было указано
// "Нет данных"
function formattedUserData(firstName, lastName, age, hometown) {
    return "\n      \u0418\u043C\u044F: ".concat(firstName, ";\n      \u0424\u0430\u043C\u0438\u043B\u0438\u044F: ").concat(lastName, ";\n      \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(age !== undefined ? age : "Нет данных", ";\n      \u0420\u043E\u0434\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434: ").concat(hometown ? hometown : "Нет данных", ";\n    ");
}
// 2. Ниже перепишите функцию formattedUserData2 таким
// образом чтобы данные выводились в консоль
function formattedUserData2(firstName, lastName, age, hometown) {
    console.log("\n      \u0418\u043C\u044F: ".concat(firstName, ";\n      \u0424\u0430\u043C\u0438\u043B\u0438\u044F: ").concat(lastName, ";\n      \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(age !== undefined ? age : "Нет данных", ";\n      \u0420\u043E\u0434\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434: ").concat(hometown ? hometown : "Нет данных", ";\n    "));
}
formattedUserData2('Asya', 'Izmaylova', 32);
