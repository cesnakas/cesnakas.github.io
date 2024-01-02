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

## Привязать удалённый репозиторий к локальному
```sh
git remote add origin git@github.com:username/example-project.git
```
Проверить, что репозитории связаны
```sh
git remote -v
```

## Основные команды
- `git status` — проверить состояние репозитория
- `git add` — добавить файл
- `git add --all` — добаввить все файлы
- `git add .` — добавить текущую папку со всеми файлами
- `git commit -m 'Example message'` — выполнить коммит с сообщением
- `git commit --amend --no-edit` — дополнить последний коммит новыми файлами без изменения сообщения
- `git commit --amend -m 'New message'` — изменить сообщение последнего коммита
- `git log` — просмотреть историю коммитов
- `git log --oneline` — сокращённый лог
- `git push -u origin main` — для первой связки локальной и удалённой ветки
- `git push` — отправить изменения на удалённый репозиторий
- `git restore --staged <file>` — убрать файл из staging
- `git restore --staged .` — сбросить все файлы из staged в untracked/modified
- `git reset --hard <commit hash>` — откатить коммит
- `git restore <file>` — откатить изменения, которые не попали ни в staging, ни в коммит
- `git fetch` — 
- `git pull` — 
