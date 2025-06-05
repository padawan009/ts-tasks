// 1. Нуже приведена не типизированная функция
// для обрезки текста cutText принимающая два
// аргумента текст: и его максимальную длину.
// Типизируйте данную функцию
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function cutText(text, size) {
    if (text.length <= size)
        return text;
    return "".concat(text.slice(0, size), "...");
}
// 2. Функция numbersToText принимает два аргумента
// числа numbers и разделитель delimer. В случае
// если чисел больше 5, функция возвращает false.
// Типизируйте функцию.
var numbersToText = function (numbers, delimer) {
    if (!Array.isArray(numbers))
        return "".concat(numbers);
    if (numbers.length > 5)
        return false;
    return __spreadArray([], numbers, true).join(delimer);
};
