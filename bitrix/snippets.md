---
title: 'Битрикс сниппеты'
description: 'Битрикс сниппеты'
---

# Битрикс сниппеты

## Редерект
```php
LocalRedirect(SITE_DIR, false, '301 Moved permanently');
```

::: details &nbsp;&nbsp;Подробнее
```php
function LocalRedirect(
    $url,
    $skip_security_check = false,
    $status = "302 Found"
): void
```
- `$url`: Url
- `$skip_security_check`: false — с предупреждением | true — без предупреждения
- `$status`: Статус
:::

