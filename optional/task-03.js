var Colors;
(function (Colors) {
    Colors[Colors["Black"] = 0] = "Black";
    Colors[Colors["Brown"] = 1] = "Brown";
    Colors[Colors["Red"] = 2] = "Red";
    Colors[Colors["Orange"] = 3] = "Orange";
    Colors[Colors["Yellow"] = 4] = "Yellow";
    Colors[Colors["Green"] = 5] = "Green";
    Colors[Colors["Blue"] = 6] = "Blue";
    Colors[Colors["Purple"] = 7] = "Purple";
    Colors[Colors["Grey"] = 8] = "Grey";
    Colors[Colors["White"] = 9] = "White";
})(Colors || (Colors = {}));
function getColorsNumber(colors) {
    var firstNum = colors[0], secondNum = colors[1];
    return +"".concat(firstNum).concat(secondNum);
}
console.log(getColorsNumber([Colors.Blue, Colors.Red]));
