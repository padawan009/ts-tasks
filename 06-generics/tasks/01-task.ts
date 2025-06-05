type PaymentInfo = {
  id: string
  amount: number
  currency: string
}

// 1. Выше описан тип PaymentInfo. Создайте новый
// тип GenericPaymentInfo который будет способен
// принимать любой тип для свойства currency.
// 2. Доработайте GenericPaymentInfo таким образом
// чтобы поумолчанию тип currency был string.
