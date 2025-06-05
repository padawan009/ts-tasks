// 1. Типизируйте функцию calc

function calc(action: string, a: number, b: number): number {
  switch (action) {
    case 'summ':
      return a + b
    case 'subtraction':
      return a - b
    case 'multiplication':
      return a * b
    case 'division':
      if (b === 0) return 0
      return a / b
    default:
      return a + b
  }
}

// 2. Напишите функцию calc2. Данная функция
// должна быть аналогична функции calc,
// но с использованием enum для action

enum Action {
  Summ = 'SUMM',
  Subtraction = 'SUBTRACTION',
  Multiplication = 'MULTIPLICATION',
  Division = 'DIVISION',
}

function calc2(action: Action, a: number, b: number): number {
  switch (action) {
    case Action.Summ:
      return a + b
    case Action.Subtraction:
      return a - b
    case Action.Multiplication:
      return a * b
    case Action.Division:
      if (b === 0) return 0
      return a / b
    default:
      return a + b
  }
}