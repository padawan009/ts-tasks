

enum Color{
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

function getColorNumber(color: Color): number {
    return color;
}

console.log(getColorNumber(Color.Purple));
