// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.

function echo<Type>(something: Type): Type {
  return something
}

// 2. Создайте стрелочную функцию echo2 c
// аналогичным функционалом.

const echo2 = <Type,>(something: Type): Type => something;