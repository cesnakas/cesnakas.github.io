---
title: 'MAMP: '
description: 'MAMP — Комплект решений, используемых для разработки и запуска динамических веб-сайтов на компьютерах Apple Macintosh.'
---

# Настрока HTTPS для MAMP

## SSL для localhost

1. Генерируем ключ RSA-2048 и сохраните его в файле `rootCA.key`.\
Обязательно задаем пароль, его нужно будет вести при создании корневого сертификата.

   ```shell
   openssl genrsa -des3 -out rootCA.key 2048
   ```
   
2. Из сгенерированного ключа создаем корневой сертификат и сохраняем его\
в файл `rootCA.pem`. Срок действия этого сертификата составит 1024 дня\
(можно изенить на любое количество дней).

   ```shell
   openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
   ```

3. Добавьте сертификат в `Keychain Access` и откройте его, выберите `доверие` и установите `всегда доверять`

4. Создаем файл конфигурации OpenSSL `server.csr.cnf`, чтоб не вводить в консоли.

   ```shell
   [req]
   default_bits = 2048
   prompt = no
   default_md = sha256
   distinguished_name = dn

   [dn]
   C=US
   ST=RandomState
   L=RandomCity
   O=RandomOrganization
   OU=RandomOrganizationUnit
   emailAddress=hello@example.com
   CN = localhost
   ```
   
5. Создаем файл `v3.ext` для сертификата.

   ```shell
   authorityKeyIdentifier=keyid,issuer
   basicConstraints=CA:FALSE
   keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
   subjectAltName = @alt_names

   [alt_names]
   DNS.1 = localhost
   ```

6. Создаем ключ сертификата для `localhost` с параметрами конфигурации `server.csr.cnf`, сохраняем в файл `server.csr.cnf`

   ```shell
   openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key -config <( cat server.csr.cnf )
   ```
   
7. Создаем сертификат для `localhost` с помощью корневого SSL-сертификата и сохраняем в файл `server.crt`.
  
   ```shell
   openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext
   ```
   
8. Переносим файлы `server.crt` и `server.key` в папку `/Applications/MAMP/conf/apache/`.
