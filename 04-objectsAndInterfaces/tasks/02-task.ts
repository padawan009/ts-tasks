// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
  'cash',
  'card',
  'credit',
}

type Currency = 'EUR' | 'USD' | 'RUB'

// interface ICustomer {
//   firstName: string
//   lastName: string
//   dateBirthday: Date
//   deliveryCountry: string
//   deliveryCity: string
//   deliveryAddress: string
//   deliveryBuilding: number | string
//   deliveryApartment?: number
//   detiveryTime?: string
//   paymentType: paymentType
//   ordersCount: number
//   discountPercent: number
//   currency: 'EUR' | 'USD' | 'RUB'
// }

interface CustomerInfo {
  firstName: string,
  lastName: string,
  dateBirthday: Date,
}

interface Delivery {
  deliveryCountry: string,
  deliveryCity: string,
  deliveryAddress: string,
  deliveryBuilding: number | string,
  deliveryApartment?: number,
  detiveryTime?: string,
}

interface Payment {
  paymentType: paymentType,
  ordersCount: number,
  discountPercent: number,
  currency: Currency,
}

interface ICustomer {
  customer: CustomerInfo,
  delivery: Delivery,
  payment: Payment,
}