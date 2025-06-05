let cars: keyof typeof CarNames | null = null

enum CarNames {
    mercedes = 'MERCEDES',
    bmw = 'BMW',
    tesla = 'TESLA'
}

// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку

cars = 'nissan'
cars = 'bmw'
cars = 'tesla'
