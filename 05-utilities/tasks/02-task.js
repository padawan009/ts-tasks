"use strict";
var stoveType;
(function (stoveType) {
    stoveType[stoveType["electro"] = 0] = "electro";
    stoveType[stoveType["gas"] = 1] = "gas";
})(stoveType || (stoveType = {}));
// Выше приведены два интерфейса IRoom - тип комнаты
// и IKitchen - тип кухни. Не внося изменений в эти
// интерфейсы создайте тип KitchenDataType в котором
// будут присутствовать все свойства IKitchen за
// исключением тех, которые есть в IRoom
