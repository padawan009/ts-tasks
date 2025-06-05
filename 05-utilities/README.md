# Секция 5 - Утилиты

Typescript имеет ряд утилит (**Utility Types**), которые позволяют
удобно и быстро

преобразовывать типы. В этом уроке мы рассмотрим основные, чаще всего
встречающиеся утилиты

## Omit и Pick

**Omit\<Type, Keys\>** - это утилита возвращающая новый тип, в котором
исключены указанные свойства. Первый параметр - исходный тип, второй -
исключаемые из него свойства

```ts
    Interface IPerson {
    name: string;
    age: number;
    location: string;
    };

    type QuantumPerson = Omit<Person, 'location'>;

    //Ниже для наглядности добавлен результат Omit

    type QuantumPerson = {
    name: string;
    age: number;
    };
```

Утилиты **Pick\<Type, Keys\>** схожа с Omit, но имеет обратный принцип
действия: Вторым параметром указываются свойства необходимые в новом
типе, остальные свойства будут исключены.

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

//Ниже для наглядности добавлен результат Pick

type TodoPreview = {
  title: string
  completed: boolean
}
```

## Partial и Required

**Partial** и **Required** - очень простые утилиты позволяющее легко
сделать все свойства типа необязательными или обязательными наоборот.

**Partial\<Type\>** - все свойства необязательные.

```ts
interface Todo {
  title: string
  description: string
}

type PartialTodo = Partial<Todo>

//Ниже для наглядности добавлен результат Partial

type PartialTodo = {
  title?: string
  description?: string
}
```

**Required\<Type\>** - все свойства обязательные.

```ts
interface Todo {
  title?: string
  description: string
}

type PartialTodo = Required<Todo>

//Ниже для наглядности добавлен результат Required

type PartialTodo = {
  title: string
  description: string
}
```

## Readonly

Утилита **Readonly\<Type\>** работает аналогичным образом одноименным
модификатором свойств. Результатом утилиты будет тип, все свойства
которого могут быть указаны только один раз, при создании объекта.
Изменение какого либо из свойств вызовет ошибку.

```ts
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}

todo.title = 'Hello'
// ОШИБКА: свойство title не может быть изменено
```

Обратной утилиты по умолчанию в typescript нет, но при необходимости вы
можете добавить ее самостоятельно

```ts
type Writable<T> = { -readonly [P in keyof T]: T[P] }

interface Todo {
  readonly title: string
}

const todo: Writable<Todo> = {
  title: 'Delete inactive users',
}

todo.title = 'Hello'
// Свойство title будет перезаписано, ошибки не будет
```

## Record

**Record\<Keys, Type\>** создает тип объекта, ключами свойств которого
являются **Keys**, а значениями свойств являются **Type**. Эту утилиту
можно использовать для отображения свойств одного типа на другой тип.

```ts
interface CatInfo {
  age: number
  breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}

//Ниже для наглядности добавлен результат Record
type CatRecord = {
  miffy: CatInfo
  boris: CatInfo
  mordred: CatInfo
}
```
