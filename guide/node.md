---
title: Node.js
titleTemplate: false
description: Node.js — Программная платформа, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.
---

# Node.js
Node.js — это программная платформа, превращающая JavaScript из узкоспециализированного языка в язык общего назначения.

## NVM
Node Version Manager (NVM) — это широко используемый инструмент, который позволяет управлять несколькими версиями Node.js на одном компьютере.

### Установка NVM на macOS

1. Обновите пакеты Homebrew
```sh
brew update
```

2. Установите NVM
```sh
brew install nvm
```

3. Создайте каталог .nvm
```sh
mkdir ~/.nvm
```

4. Отредактируйте следующий файл конфигурации
```sh
nano ~/.zshrc
```

Вставляем в файл строки:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && \. "/usr/local/opt/nvm/etc/bash_completion"
```

5. Загружаем переменную в текущую среду оболочки.
```sh
source ~/.zshrc
```

### Использование NVM

Просмотреть доступные версии для установки
```sh
nvm ls-remote
```

Можно установить любую версию использовать псевдонимы, такие как `node` для последней версии, `lts` для последней версии LTS.
```sh
nvm install node
nvm install 20
```

Проверить, что установлено:
```sh
nvm ls
```

Переключение между версиями:
```sh
nvm use 18
```
