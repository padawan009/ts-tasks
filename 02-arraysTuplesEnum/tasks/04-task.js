var cars = null;
var CarNames;
(function (CarNames) {
    CarNames["mercedes"] = "MERCEDES";
    CarNames["bmw"] = "BMW";
    CarNames["tesla"] = "TESLA";
})(CarNames || (CarNames = {}));
// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку
cars = 'nissan';
