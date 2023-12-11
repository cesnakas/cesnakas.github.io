---
title: Фильтр
description: Фильтр Битрикс
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
