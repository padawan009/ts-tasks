interface ITruck {
  brand: string
  model: string
  hasTrailer: boolean
}

// Выше описан интерфейс грузовика ITruck.
// Создайте тип обычного авто ICar убрав из
// интерфейса поле hasTrailer

type ICar = Omit<ITruck, 'hasTrailer'>;
