---
title: Git
titleTemplate: false
description: Git — Система контроля версий с распределенной архитектурой.
---

# Git
Git — Система контроля версий с распределенной архитектурой.

## Подходы
- **Feature Branch Workflow** — простой и самый популярный вариант. В нём для каждого нового изменения создаётся новая ветка, которая позже вливается в `main` с помощью `git merge`.
- **Git Flow** — более сложный вариант. Подход похож на *Feature Branch Workflow*, но в нём создаётся больше веток, а изменения (коммиты) делят на разные типы: исправление, новая функциональность и так далее. Разные типы коммитов попадают в разные ветки.
- **Trunk-based** — популярный подход в крупных командах, который обещает большую скорость работы.

## Привязать удалённый репозиторий к локальному
```sh
git remote add origin git@github.com:username/example-project.git
```
Проверить, что репозитории связаны:
```sh
git remote -v
```
Если нужно «разгитить» папку:
```sh
rm -rf .git
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
- `git branch` — просмотреть ветки проекта
- `git checkout <название_ветки>` — переключиться на другую ветку
- `git checkout -b <название_ветки>` — создать ветку и сразу переключиться на неё
- `git diff <название_ветки1> <название_ветки2>` — сравнить ветки
- `git merge <название_ветки>` — выполнить слияние
- `git branch -D <название_ветки>` — удалить ветку
- `git fetch` —
- `git pull` — забрать изменения из удалённого репозитория
- `--no-ff` — Fast-forward слияние веток можно отключить флагом. Например: `git merge --no-ff <название_ветки>`
- `git config [--global] merge.ff false` — Отключить Fast-forward «навсегда» (вернёте настройку поумолчанию `true`)

## Порядок действий
```sh
$ git checkout main # переходим в main
$ git pull # подтягиваем новые изменения в main
$ git checkout my-branch # возвращаемся в рабочую ветку my-branch
$ git merge main # вливаем main в новую ветку my-branch
$ git push -u origin my-branch # отправляем ветку my-branch в удалённый репозиторий
```

## Настройка .gitconfig
Задаем имя или никнейм:
```sh
git config --global user.name "UserName"
```

Задаем электронную почту:
```sh
git config --global user.email username@example.com
```

Посмотреть настройки:
```sh
git config --list
```

## Обновить URL-адрес репозитория
Частой ошибкой является клонирование репозитория с использованием HTTPS вместо SSH

```sh
git remote set-url origin git@github.com:username/repo.git
```

## Выбрать дефолтную ветку
main — название ветки
```sh
git config --global init.defaultBranch main
```
