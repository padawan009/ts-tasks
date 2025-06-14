// 1. Нуже приведена не типизированная функция
// для обрезки текста cutText принимающая два
// аргумента текст: и его максимальную длину.
// Типизируйте данную функцию

function cutText(text: string, size: number): string {
  if (text.length <= size) return text
  return `${text.slice(0, size)}...`
}

// 2. Функция numbersToText принимает два аргумента
// числа numbers и разделитель delimer. В случае
// если чисел больше 5, функция возвращает false.
// Типизируйте функцию.

const numbersToText = (numbers: number[], delimer: string): string | boolean => {
  if (!Array.isArray(numbers)) return `${numbers}`

  if (numbers.length > 5) return false

  return [...numbers].join(delimer)
}
