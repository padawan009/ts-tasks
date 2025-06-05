var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Brown"] = 1] = "Brown";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Orange"] = 3] = "Orange";
    Color[Color["Yellow"] = 4] = "Yellow";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
    Color[Color["Purple"] = 7] = "Purple";
    Color[Color["Grey"] = 8] = "Grey";
    Color[Color["White"] = 9] = "White";
})(Color || (Color = {}));
function getColorNumber(color) {
    return color;
}
console.log(getColorNumber(Color.Purple));
