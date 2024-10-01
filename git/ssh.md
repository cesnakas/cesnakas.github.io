---
title: Git SSH ключ
description: Git — SSH-ключ
---

# Git SSH-ключ

Чтобы использовать Git сразу с двумя хостингами GitLab и GitHub, вам нужно настроить удаленные репозитории и возможно ваши SSH ключи. Вот пошаговый процесс:

1. Создайте SSH ключи:
   Возможно, вы захотите создать отдельные SSH ключи для GitLab и GitHub для разграничения доступа.

    - Для создания нового SSH ключа используйте команду:

      ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

      Когда вам будет предложено ввести имя файла, введите путь, где вы хотите сохранить ключ, например:

      /home/yourusername/.ssh/id_rsa_gitlab

        - Сделайте то же самое для GitHub, но с другим именем файла, например id_rsa_github.

    - Добавьте новые ключи в агент SSH с помощью команды:

      ssh-add ~/.ssh/id_rsa_gitlab
      ssh-add ~/.ssh/id_rsa_github

2. Настройка конфигурации SSH:
    - Создайте или откройте файл конфигурации SSH, который обычно находится в ~/.ssh/config.
    - Добавьте туда следующие строки:

      # GitLab account
      Host gitlab.com
      Preferredauthentications publickey
      IdentityFile ~/.ssh/id_rsa_gitlab

      # GitHub account
      Host github.com
      Preferredauthentications publickey
      IdentityFile ~/.ssh/id_rsa_github

3. Настройка удаленных репозиториев:
   Вы можете использовать один и тот же локальный репозиторий Git для работы с GitLab и GitHub. Для этого вам нужно настроить два удаленных репозитория.

    - Для добавления нового удаленного репозитория используйте команду:

      git remote add gitlab git@gitlab.com:username/repo.git

        - Сделайте то же самое для GitHub:

      git remote add github git@github.com:username/repo.git

   Теперь вы можете использовать команды git push gitlab и git push github для отправки ваших изменений на соответствующие платформы.