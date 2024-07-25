---
title: 'Битрикс — Debugging'
description: 'Битрикс — Debugging'
---

# Debugging

## dbconn.php
В файле `/bitrix/php_interface/dbconn.php` включить отображение ошибок:

```php
$DBDebug = true;
```

## var_dump()
Выводит значения вместе с типами данных, отображает количество элементов в переменной, выводит длину переменной

```php
<?php echo '<pre>'; var_dump(''); echo '</pre>'; ?>
```

## print_r()
Выводит информацию о переменной в удобочитаемом виде
```php
<?php echo '<pre>'; print_r('', true); echo '</pre>' ?>
```

## JSON
Выводит значение переменной в консоли
```php
<?= "<script>console.log(" . json_encode('') . ")</script>" ?>;
```
