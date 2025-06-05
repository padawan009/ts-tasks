const ages = []
const answers = []
const data = []

// Определите в явном виде типы массивов таким
// образом, чтобы код ниже работал корректно

ages.push(22)
ages.push('32')
ages.push(173)
ages.push(`${ages[0]}`)
ages.push('88')
ages.push(100)

answers.push(17)
answers.push('Typescript')
answers.push('Результат')
answers.push(77 > 66)
answers.push(`${answers[1]}`.charAt(0))
answers.push('2' + 567)

data.push(Math.random())
data.push(answers[2])
data.push(+ages[0] - 11)
data.push({ name: 'Антон', age: 22, city: 'Воронеж', hasCar: true })
data.push(false)
