// 1. Опиши типизацию юзера
// 2. Замени все unknown описанным типом
// 3. Проверь работоспособность кода

export type User = {
  name: string,
  age: number,
  occupation: string,
}

export const users: User[] = [
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
]

export function logPerson(user: User): void {
  console.log(` - ${user.name}, ${user.age}`)
}

console.log('Users:', users);
users.forEach(logPerson);
