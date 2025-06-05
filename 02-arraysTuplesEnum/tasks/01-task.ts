// 1. Создайте 3 массива: массив из имен 3 ваших
// лучших друзей, массив из их возрастов, массив
// в котором будет указано есть ли у них автомобиль
// 2. Укажите в явной тип массивов
// 3. Заполните данные

const friends: string[] = ['Kasya', 'Karima', 'Leyla'];
const ages: number[] = [33, 23, 25];
const hasCar: boolean[] = [true, true, false];

// 4. Добавьте в каждый из массивов информацию
// о вашем четвертом друге

friends.push('Maryam');
ages.push(23);
hasCar.push(false);

// 5. Раскомментируйте строки ниже исправьте их
// таким образом чтобы не возникало ошибок

friends.push("Ваня");
ages.push(22)
hasCar.push(true);

// 6. Создайте кортеж массивов, перенесите данные
// о ваши друзьях в него

const friendsData: [string[], number[], boolean[]] = [friends, ages, hasCar];

console.log(friendsData);
