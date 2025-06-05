# Секция 4 - Объекты и интерфейсы

В этом уроке мы рассмотрим более сложные ссылочные типы данных. В
большинстве задач для описания типа данных нам недостаточно примитивов
**string**, **number** и **boolean**. В таких случаях к нам на помощь
приходят объекты.

## Объекты

Объекты в TypeScript должны содержать все объявленные свойства с теми же
типами, которые были объявлены:

```ts
// Объявляем переменную-объект person со специальной аннотацией типов
let person: {
  name: string
  location: string
  isProgrammer: boolean
}

// Присваиваем переменной person объект со всеми необходимыми полями и значениями
person = {
  name: 'Денис',
  location: 'RU',
  isProgrammer: true,
}

person.isProgrammer = 'Да' // ОШИБКА: должно быть логическое значение

person = {
  name: 'Олег',
  location: 'RU',
}
// ОШИБКА: пропущено свойство isProgrammer
```

В случае, когда нам необходимо определить не обязательное свойство,
необходимо использовать "**?**". В примере ниже свойство isProgrammer
может быть как определено, так и не определено.

```ts
let person: {
  name: string
  location: string
  isProgrammer?: boolean
}

person = {
  name: 'Олег',
  location: 'RU',
}
// Свойство isProgrammer не обязательное, ошибки не будет
```

Некоторые свойства должны изменяться только один раз, при создании
объекта. Этого можно добиться, ограничив свойство только для чтения,
применив модификатор "**readonly**"

```ts
let person: {
  readonly name: string
  location: string
  isProgrammer?: boolean
}

person = {
  name: 'Олег',
  location: 'RU',
}

person.name = 'Антон'
// ОШИБКА: пропущено свойство name не может быть изменено
```

## Interface и type

В случае когда нам нужно сделать тип объекта переиспользуемым мы можем
использовать **interface**

```ts
interface Person {
  name: string
  location: string
  isProgrammer: boolean
}

let person1: Person = {
  name: 'Денис',
  location: 'RU',
  isProgrammer: true,
}

let person2: Person = {
  name: 'Саша',
  location: 'Россия',
  isProgrammer: false,
}
```

Также для этих целей можно использовать псевдонимы типов. Для создания
псевдонима типов используется ключевое слово **type** . В примере ниже
мы можем увидеть, что псевдоним типа **PersonObject** предотвращает
повторение и выступает единственным источником истины для типов данных,
которые должны содержаться в объекте **person**.

```ts
type StringOrNumber = string | number

type PersonObject = {
  name: string
  id: StringOrNumber
}

const person1: PersonObject = {
  name: 'Федор',
  id: 1,
}

const person2: PersonObject = {
  name: 'Олег',
  id: 2,
}
```

## Keyof - получение ключей типа/интерфейса

Оператор keyof \"берет\" объектный тип и возвращает строковое или числовое литеральное объединение его ключей:

```ts
    type Point = { x: number, y: number }
    type P = keyof Point

    //  Результат работы keyof

    type P = “x” | “y”;
```

Если типом сигнатуры индекса (index signature) типа является string или
number, keyof возвращает эти типы:

```ts
type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish
// type A = number

type Mapish = { [k: string]: boolean }
type M = keyof Mapish
// type M = string | number
```

Обратите внимание, что типом M является string \| number. Это
объясняется тем, что ключи объекта в JS всегда преобразуются в строку,
поэтому obj\[0\] --- это всегда тоже самое, что obj\[\'0\'\].

## Разница между синонимами типов и интерфейсами

Синонимы типов и интерфейсы очень похожи. Почти все возможности
interface доступны в type. Ключевым отличием между ними является то, что
**type не может быть повторно открыт для добавления новых свойств, в то время как interface всегда может быть расширен.**

Пример добавления новых полей в существующий интерфейс:

```ts
    interface Window {
    title: string
    }

    interface Window {
    ts: TypeScriptAPI
    }

    const src = 'const a = 'Hello World''
    window.ts.transpileModule(src, {})
```

Тип не может быть изменен после создания:

```ts
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}
// Ошибка: повторяющийся идентификатор 'Window'.
```

**Важно! "В чем отличие между type и interface?" - Самый распространенный вопрос по typescript на собеседованиях.**

## Правильный нейминг интерфейсов

DTO (Data transfer Object) - Это данные которые приходят в ваше
приложение с бекенда. Typescript как нельзя лучше подходит для описания
их схемы данных.

Обычно все интерфейсы описывающие сущность данные которой приходят с
бекенда принято называть с окончанием DTO. К примеру:

```ts
interface UserDTO {
  id: number
  name: string
  location: string
  isProgrammer: boolean
}
```

В случае, когда модель данных используется только на стороне фронтенда
ее название принято начинать с заглавной буквы "**I**". К примеру:

```ts
interface IUserData {
  name: string
  phone: string
}
```

## Переиспользование интерфейсов

В коде практически каждого более или менее сложного приложения встречаются очень похожие, но все же не идентичные модели данных. Описывать для каждой такой модели отдельный интерфейс будет неправильным решением, которое будет нарушать один из ключевых принципов ООП - **DRY** (не повторяй себя).

Именно для таких случаев в typescript предусмотрен ряд инструментов,
позволяющих расширять и переиспользовать интерфейсы:

### Наследование

Аналогично классам и объектам интерфейсы могут наследовать модели с
помощью ключевого слова «**extends**».

```ts
interface IUser {
  name: string
  phone: string
}

interface ISubscriber extends IUser {
  email: string
}

//Ниже для наглядности добавлен результат наследования

interface ISubscriber {
  name: string
  phone: string
  email: string
}
```

Также возможно наследовать сразу несколько интерфейсов указав их через
запятую.

```ts
interface IPerson {
  name: string
  phone: string
}

interface ICar {
  model: string
  isTruck: boolean
}

interface IDriver extends IUser, ICar {
  driversLicense: number
}

//Ниже для наглядности добавлен результат наследования

interface IDriver {
  name: string
  phone: string
  model: string
  isTruck: boolean
  driversLicense: number
}
```

### Вложенные интерфейсы

Интерфейс в примере выше будет не сильно удобен в использовании, ведь мы
наследовали в нем свойства сразу двух разных сущностей. В подобных
случаях гораздо удобнее использовать вложенные интерфейсы

```ts
interface IPerson {
  name: string
  phone: string
}

interface ICar {
  model: string
  isTruck: boolean
}
interface IDriver {
  person: IPerson
  car: ICar
  driversLicense: number
}

//Ниже для наглядности добавлен результат наследования

interface IDriver {
  person: {
    name: string
    phone: string
  }
  car: {
    model: string
    isTruck: boolean
  }
  driversLicense: number
}
```

### Переиспользование типа конкретного свойства интерфейса

Помимо переиспользования всех свойств интерфейса, мы можем также
передать в новый интерфейс и только тип конкретного свойства другого
интерфейса.

```ts
    interface IPerson {
    name: string;
    phone: string;
    }

    interface IUser {
    id: number;
    name: IPerson[‘name’];
    email: string;
    }

    //Ниже для наглядности добавлен результат наследования

    interface IUser {
    id: number;
    name: string;
    email: string;
    }
```

Такой подход часто бывает полезен при передаче данных в React компоненты
(об этом в следующих уроках).

## Объединение типов &

Для простого объединения типов вы можете использовать оператор **&.**
При таком объединении вы получите новый тип, который будет содержать все
свойства объединенных типов.

К примеру:

```ts
interface IPerson {
  name: string
  phone: string
}

interface ICar {
  model: string
  isTruck: boolean
}

type IDriver = IPerson & ICar

//Ниже для наглядности добавлен результат наследования

type IDriver = {
  name: string
  phone: string
  model: string
  isTruck: boolean
}
```
