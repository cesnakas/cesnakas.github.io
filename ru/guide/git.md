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

## Git Add
- `git add` — добавить файл
- `git add --all` — добаввить все файлы
- `git add .` — добавить текущую папку со всеми файлами

## Git Branch
- `git branch` — просмотреть ветки проекта
- `git branch -D <название_ветки>` — удалить ветку

## Git Checkout
- `git checkout <название_ветки>` — переключиться на другую ветку
- `git checkout -b <название_ветки>` — создать ветку и сразу переключиться на неё

## Git Commit
- `git commit -m '<Message>'` — выполнить коммит с сообщением
- `git commit --amend --no-edit` — дополнить последний коммит новыми файлами без изменения сообщения
- `git commit --amend -m '<New_message>'` — изменить сообщение последнего коммита

## Git Diff
- `git diff <название_ветки1> <название_ветки2>` — сравнить ветки

## Git Fetch
- `git fetch` — загрузка содержимого из удаленного репозитория
- `git fetch <remote>` — извлечение всех веток из репозитория
- `git fetch <remote> <название_ветки>` — извлечение только для указанной ветки
- `git fetch --all` — извлечь все зарегистрированные удаленные репозитории и их ветки
- `git fetch --dry-run` — выводит на экран действия, которые были бы выполнены при извлечении, не выполняя их на самом деле

## Git Log
- `git log` — просмотреть историю коммитов
- `git log --oneline` — сокращённый лог

## Git Merge
- `git merge <название_ветки>` — выполнить слияние
- `git merge --no-ff <название_ветки>` — отключить слияние веток

## Git Pull
- `git pull` — забрать изменения из удалённого репозитория

## Git Push
- `git push` — отправить изменения на удалённый репозиторий
- `git push -u origin main` — для первой связки локальной и удалённой ветки

## Git Reset
- `git reset --hard <commit hash>` — откатить коммит

## Git Restore
- `git restore --staged <file>` — убрать файл из staging
- `git restore --staged .` — сбросить все файлы из staged в untracked/modified
- `git restore <file>` — откатить изменения, которые не попали ни в staging, ни в коммит

## Git Stash
- `git stash save 'Bug Fix: Main page'` — спрятать изменения с комментарием
- `git stash save -u 'Bug Fix: Main page` — спрятать изменения с добавлением новых файлов (`--include-untracked`)
- `git stash save -a 'Bug Fix: Main page'` — спрятать изменения с добавлением всех игнорируемых файлов
- `git stash list` — вывести список всех спрятанных изменений
- `git stash apply stash@{0}` — применить спрятанные изменения
- `git stash show stash stash@{1}` — показать какие изменения в спрятанных файлах
- `git stash pop` — удалить спрятанные изменения
- `git stash pop stash@{0}` — удалить конкретное изменение
- `git stash branch <название_ветки>` — создать новую ветку со всеми изменениями из локального хранилища
- `git stash drop` — удалить старые сохранения из локального хранилища
- `git stash clean` — полностью очистить локальное хранище

## Git Status
- `git status` — проверить состояние репозитория

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

Отключить Fast-forward «навсегда» (вернуть настройку по умолчанию `true`)
```sh
git config [--global] merge.ff false
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
