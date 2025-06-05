// 1. Создайте несколько переменных:
// Имя, Фамилия, Пол, Возраст, Родной город,
// Почтовый индекс,Семейное положение
// женат/замужем (да/нет), Есть ли домашние
// животные? (да/нет)
// 2. Явно определите тип переменных
// 3. Присвойте каждой переменной значение
// соответствующее лично вам
// 4. Выведите данные в консоль
var firstName = "Asya";
var surname = "Izmaylova";
var gender = "female";
var age = 32;
var hometown = "Grozny";
var postalCode = "117393";
var isMarried = false;
var hasPets = false;
console.log("\u0418\u043C\u044F: ".concat(firstName));
console.log("\u0424\u0430\u043C\u0438\u043B\u0438\u044F: ".concat(surname));
console.log("\u041F\u043E\u043B: ".concat(gender));
console.log("\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ".concat(age));
console.log("\u0420\u043E\u0434\u043D\u043E\u0439 \u0433\u043E\u0440\u043E\u0434: ".concat(hometown));
console.log("\u041F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441: ".concat(postalCode));
console.log("\u0417\u0430\u043C\u0443\u0436\u0435\u043C: ".concat(isMarried ? "Да" : "Нет"));
console.log("\u0415\u0441\u0442\u044C \u043B\u0438 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0435: ".concat(hasPets ? "Да" : "Нет"));
