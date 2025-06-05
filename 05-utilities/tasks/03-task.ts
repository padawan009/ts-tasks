interface IShop {
  id: number
  name: string
  employeesCount: number
  ceo: string
  address: string
  isOpen: boolean
}

// В данном файле описаны 2 типа IShop - модель
// данных магазина и IShopListItem - данные
// магазина использующиеся в списке магазинов.
// Перепишите IShopListItem создав еще 2 типа:
// IShopListItem1 - используя утилиту которая
// удаляет указанные свойства и IShopListItem2
// - используя утилиту, которая удаляет все
// свойства, кроме указанных.

type IShopListItem = {
  id: IShop['id']
  name: IShop['name']
  address: IShop['address']
}
