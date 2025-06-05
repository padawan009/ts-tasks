"use strict";
// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.
var paymentType;
(function (paymentType) {
    paymentType[paymentType["cash"] = 0] = "cash";
    paymentType[paymentType["card"] = 1] = "card";
    paymentType[paymentType["credit"] = 2] = "credit";
})(paymentType || (paymentType = {}));
