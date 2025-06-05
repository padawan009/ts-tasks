

enum Colors{
    Black,
    Brown,
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Purple,
    Grey,
    White,
}

function getColorsNumber(colors: [Colors, Colors]): number {
    const [firstNum, secondNum] = colors;
    return +`${firstNum}${secondNum}`;
}

console.log(getColorsNumber([Colors.Blue, Colors.Red]));
