---
title: 'Активация шаблона — Битрикс Миграции'
description: 'Активация шаблона — Битрикс Миграции'
aside: false
---

# Установка нового шаблона сайта

## Up
```php
public function up()
{
    $query = SiteTemplateTable::getList([
        'SELECT' => ['ID'],
        'FILTER' => [
            'CONDITION' => 'CSite::InDir(\'/index.php\')',
        ]
    ])->fetch();
    if ($query) {
        SiteTemplateTable::delete($query['ID']);
    }

    $addResult = SiteTemplateTable::add([
        'SITE_ID' => 's1',
        'CONDITION' => 'CSite::InDir(\'/index.php\')',
        'SORT' => 1,
        'TEMPLATE' => 'main'
    ]);
    if (!$addResult->isSuccess()) {
        throw new \Exception($addResult->getErrorMessages());
    }
}
```

## Down
```php
$query = SiteTemplateTable::getList([
    'SELECT' => ['ID'],
    'FILTER' => [
        'CONDITION' => 'CSite::InDir(\'/index.php\')',
    ]
])->fetch();
if ($query) {
    SiteTemplateTable::delete($query['ID']);
}

$addResult = SiteTemplateTable::add([
    'SITE_ID' => 's1',
    'CONDITION' => 'CSite::InDir(\'/index.php\')',
    'SORT' => 1,
    'TEMPLATE' => '.default'
]);
if (!$addResult->isSuccess()) {
    throw new \Exception($addResult->getErrorMessages());
}
```
