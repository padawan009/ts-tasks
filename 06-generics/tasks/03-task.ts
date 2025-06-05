// Ниже описана функция getLength. Доработайте
// ее дженерик таким образом чтобы код не вызывал
// ошибок.

function getLength<T>(arg: T): number {
  return arg.length
}
