---
title: 'Битрикс — Debugging'
description: 'Битрикс — Debugging'
aside: false
---

# Debugging


## var_dump()

Выводит значения вместе с типами данных, отображает количество элементов в переменной, выводит длину переменной

```php
<?php echo '<pre>'; var_dump(''); echo '</pre>'; ?>
```


## JSON

Выводит значение переменной в консоль

```php
echo "<script>console.log(" . json_encode('') . ")</script>";
```


## dbconn.php

В файле `/bitrix/php_interface/dbconn.php` включить отображение ошибок:

```php
$DBDebug = true;
```


## Поиск по ID

```php
/bitrix/admin/iblock_redirect_entity.php
```
