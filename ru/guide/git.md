---
title: Git
titleTemplate: false
description: Git — Система контроля версий с распределенной архитектурой.
---

# Git

## Настройка .gitconfig
Задать имя или никнейм
```sh
git config --global user.name "UserName"
```
Электронная почта
```sh
git config --global user.email username@example.com
```
Посмотреть настройки
```sh
git config --list
```

## Создать папку репозитория
```sh
git init
```
Если нужно «разгитить» папку — `rm -rf .git`

## Основные команды
- `git status` — проверить состояние репозитория
- `git add` — добавить файл
- `git add --all` — добаввить все файлы
- `git add .` — добавить текущую папку со всеми файлами
- 
