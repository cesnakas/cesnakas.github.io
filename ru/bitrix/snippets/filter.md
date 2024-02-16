---
title: 'Битрикс фильтр новостей по названию и id'
#titleTemplate: false
description: 'Битрикс — Фильтр новостей по названию и id'
---

# Фильтр

## Фильтр новостей по названию и id
```php
// подключаем инфоблок
if (CModule::IncludeModule('iblock')) {
  // определяем ID инфоблока
  $res = CIBlockElement::GetList([], ["IBLOCK_ID" => 13]);
  while ($ob = $res->GetNext()) {
    // если раздел равен названию элемента
    if ($APPLICATION->GetCurDir() == $ob['NAME']) {
      // фильтруем по ID элемента
      $GLOBALS["arrFilter"] = ['ID' => $ob['ID']];
      // выводим компонент новостей
      $APPLICATION->IncludeComponent("bitrix:news.list", ".default",
        [
          "FILTER_NAME" => "arrFilter",
          // parameters...
        ],
        false
      );
    }
  }
}
```

## Вывести несколько разделов инфоблока
Фильтр работает в компонентах: `news`, `news.list`, `catalog.section.list`
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
