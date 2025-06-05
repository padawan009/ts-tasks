# TS Core

В этой теме вы познакомитесь с [typescript](https://www.typescriptlang.org/)

## Подготовка окружения

1. Установка [node.js](https://nodejs.org/en) и [npm](https://www.npmjs.com/)
   1. Переходим на [node.js](https://nodejs.org/en)
   2. Устанавливаем "Recommended For Most Users" версию
   3. Откроем консоль и выполним команды:
   ```
       node -v
   ```
   ```
       npm -v
   ```
   Если команды отработали правильно, то вы увидите версии node.js и npm соответственно
2. Создание package.json
   1. Выполните команду
   ```
       npm init
   ```
   2. При создании укажите название пакета (package name) и точку входа (entry point), остальные поля оставьте по умолчанию
3. Установите [typescript](https://www.typescriptlang.org/)
   1. Выполните команду:
   ```
        npm install typescript --save-dev
   ```
   2. Создайте файл tsconfig.json
   ```
        tsc init
   ```
   3. Раскомментируйте секцию: **/_ Type Checking _/**
   4. Раскомментируйте **noEmitOnError**

## Использовние

Теперь вы можете запустить компилятор TypeScript с помощью этой команды:

```
npx tsc
```

## Полезные ссылки

- [typescript](https://www.typescriptlang.org/)
- [Подробное видео про typescript](https://www.youtube.com/watch?v=7NU6K4170As&list=PLqKQF2ojwm3nW-cQeSER79xdpK3vL5c-g)
