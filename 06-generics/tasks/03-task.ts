// Ниже описана функция getLength. Доработайте
// ее дженерик таким образом чтобы код не вызывал
// ошибок.

function getLength<T extends Length>(arg: T): number {
  return arg.length
}

type Length = {
  length: number
}
