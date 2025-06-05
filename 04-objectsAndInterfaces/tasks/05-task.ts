// 1. Опиши типизацию юзера
// 2. Замени все unknown описанным типом
// 3. Проверь работоспособность кода

export type User = unknown

export const users: unknown[] = [
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

export function logPerson(user: unknown) {
  console.log(` - ${user.name}, ${user.age}`)
}

console.log('Users:')
users.forEach(logPerson)
