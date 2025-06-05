// 1. Создайте несколько переменных:
// Имя, Фамилия, Пол, Возраст, Родной город,
// Почтовый индекс,Семейное положение
// женат/замужем (да/нет), Есть ли домашние
// животные? (да/нет)
// 2. Явно определите тип переменных
// 3. Присвойте каждой переменной значение
// соответствующее лично вам
// 4. Выведите данные в консоль

const firstName: string = "Asya";
const surname: string = "Izmaylova";
const gender: string = "female";
const age: number = 32;
const hometown: string = "Grozny";
const postalCode: string = "117393";
const isMarried: boolean = false;
const hasPets: boolean = false;

console.log(`Имя: ${firstName}`);
console.log(`Фамилия: ${surname}`);
console.log(`Пол: ${gender}`);
console.log(`Возраст: ${age}`);
console.log(`Родной город: ${hometown}`);
console.log(`Почтовый индекс: ${postalCode}`);
console.log(`Замужем: ${isMarried ? "Да" : "Нет"}`);
console.log(`Есть ли домашние животные: ${hasPets ? "Да" : "Нет"}`);
