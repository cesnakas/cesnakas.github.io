---
title: 'Битрикс: Новости'
#titleTemplate: false
description: 'Битрикс сниппеты — компонент Новости'
---

# News

## Вывести несколько разделов инфоблока
```php
GLOBAL $arrFilter;
$arrFilter = ['SECTION_ID' => [1, 2]];
$APPLICATION->IncludeComponent("bitrix:news.list", ".default",
    [
        "IBLOCK_ID" => "1",
        "PARENT_SECTION" => "2",
        "FILTER_NAME" => "arrFilter",
        ...
    ],
    false
```
