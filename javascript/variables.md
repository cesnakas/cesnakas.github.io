---
title: Переменные JavaScript
description: JavaScript — Переменные
---

# Переменные
Переменные — это контейнеры для хранения данных. В JavaScript есть три ключевых слова для создания переменных: `var`, `let` и `const`.

## var
Позволяет объявить переменную и обратиться к ней, не присваивая ей значения.
- Переменная, созданная _вне функции_, действует как глобальная — она доступна из любой части скрипта.
- Переменная созданая _внутри функции_, является локальной, то есть доступной только в этой функции.

## let
Имеет блочную область видимости. Переменная, объявленная с помощью `let`, не инициализируется, пока ей не присвоится значение. Обращение к переменной до инициализации вызовет ошибку.

## const
Обладает всеми теми же свойствами, что и `let`, за исключением того, что `const` нельзя переназначить и что значение переменной должно быть присвоено сразу в момент объявления. Проще говоря, это константа, которую задают один раз, и это значение больше не меняется.

## Преобразование типов
Процесс изменения значения из одного типа в другой.\
Преобразования типов могут быть **явными** (по решению программиста) и **неявными** (по решению компилятора).
- **Явное преобразование** выполняется с помощью оператора, при этом имя типа, в который необходимо преобразовать значение, помещается в круглые скобки:
  - `String()` — преобразование в строку
  - `Number()` — преобразование в число
  - `Boolean()` — преобразование в булевое значение
- **Неявное преобразование** происходит, если:
  - выполняются арифметические операции со значениями разных типов
  - происходит инициализация переменной другого типа