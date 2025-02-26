---
title: MAMP
titleTemplate: false
description: MAMP — Комплект решений, используемых для разработки и запуска динамических веб-сайтов на компьютерах Apple Macintosh.
next: true
---

# MAMP

MAMP — это набор решений, состоящий из бесплатного и проприетарного коммерческого программного обеспечения с открытым исходным кодом, используемого для разработки и запуска динамических веб-сайтов на компьютерах Apple Macintosh.\
Аббревиатура MAMP происходящая от названий компонентов системы: macOS, Apache, MySQL / MariaDB, PHP / Perl / Python.

## Настройка доменов

1. Открыть файл `/Applications/MAMP/conf/apache/httpd.conf` и раскомментировать строку:

```apache [/Applications/MAMP/conf/apache/httpd.conf]
# Virtual hosts
Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
```

2. Открыть файл `/Applications/MAMP/conf/apache/extra/httpd-vhosts.conf` и отредактировать:

```apache [/Applications/MAMP/conf/apache/extra/httpd-vhosts.conf]
<VirtualHost *:80>
    ServerAdmin webmaster@example.loc
    DocumentRoot "/Applications/MAMP/htdocs/example.loc"
    ServerName example.loc
    ServerAlias www.example.loc
    ErrorLog "logs/example.loc-error_log"
    CustomLog "logs/example.loc-access_log" common
</VirtualHost>
```

3. Прописать в `sudo nano /etc/hosts` домен.

