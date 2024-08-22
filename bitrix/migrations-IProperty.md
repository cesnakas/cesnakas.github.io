---
title: 'Миграции мета-тегов Битрикс'
description: 'Миграции мета-тегов Битрикс'
aside: false
---

# Миграции мета-тегов Битрикс


## Миграция SEO свойств

```php
<?php

namespace Sprint\Migration;

use Bitrix\Iblock\ElementTable;
use Bitrix\Iblock\InheritedProperty\ElementValues;
use Bitrix\Iblock\InheritedProperty\SectionValues;
use Bitrix\Iblock\InheritedPropertyTable;
use Bitrix\Iblock\SectionTable;
use Bitrix\Main\ArgumentException;
use Bitrix\Main\Loader;
use Bitrix\Main\LoaderException;
use Bitrix\Main\ObjectPropertyException;
use Bitrix\Main\SystemException;
use Exception;
use Sprint\Migration\Exceptions\HelperException;

class Version20241231000000 extends Version
{
    protected $description = "Описание";
    
    protected $moduleVersion = "4.2.4";
    
    /**
     * @return void
     * @throws Exceptions\MigrationException
     * @throws Exceptions\RestartException
     */
    public function up(): void
    {
        $this->run('up/iproperties.xml');
    }
    
    /**
     * @return void
     * @throws Exceptions\MigrationException
     * @throws Exceptions\RestartException
     */
    public function down(): void
    {
        $this->run('down/iproperties.xml');
    }
    
    /**
     * @param string $path
     * @return void
     * @throws Exceptions\MigrationException
     * @throws Exceptions\RestartException
     */
    public function run(string $path): void
    {
        $this->getExchangeManager()
            ->IblockElementsImport()
            ->setExchangeResource($path)
            ->setLimit(5)
            ->execute(function ($item) {
                $this->saveIProperties($item['fields']);
            });
    }
    
    /**
     * @param array $arEntity
     * @return void
     * @throws HelperException
     * @throws ArgumentException
     * @throws LoaderException
     * @throws ObjectPropertyException
     * @throws SystemException
     * @throws Exception
     */
    protected function saveIProperties(array $arEntity): void
    {
        Loader::includeModule('iblock');

        $codePrefix = $this->getCodePrefixByType($arEntity['ENTITY_TYPE']);
        $ormClass = $this->getOrmClassByType($arEntity['ENTITY_TYPE']);
        $iblockId = $this->getIblockId($arEntity['IBLOCK_UID']);
        $entityId = $this->getEntityId($ormClass, [
            'IBLOCK_ID' => $iblockId,
            'CODE' => $arEntity['CODE'],
        ]);

        $iPropCodes = array_filter(array_map(function ($code) use ($arEntity, $codePrefix) {
            return isset($arEntity[$code]) ? $codePrefix . $code : null;
        }, ["META_TITLE", "META_DESCRIPTION", "PAGE_TITLE"]));

        $iProps = InheritedPropertyTable::getList([
            'select' => ['ID', 'CODE', 'ENTITY_ID'],
            'filter' => [
                'IBLOCK_ID' => $iblockId,
                'ENTITY_ID' => $entityId,
                'CODE' => $iPropCodes
            ]
        ])->fetchAll();

        foreach ($iPropCodes as $iPropCode) {
            $newPropValue = trim($arEntity[str_replace($codePrefix, '', $iPropCode)]);
            $found = false;

            foreach ($iProps as $iProp) {
                if ($iProp['CODE'] == $iPropCode) {
                    $found = true;
                    if ($newPropValue) {
                        InheritedPropertyTable::update($iProp['ID'], ["TEMPLATE" => $newPropValue]);
                    } else {
                        InheritedPropertyTable::delete($iProp['ID']);
                    }
                }
            }

            if (!$found) {
                InheritedPropertyTable::add([
                    'IBLOCK_ID' => $iblockId,
                    'CODE' => $iPropCode,
                    'ENTITY_TYPE' => $arEntity['ENTITY_TYPE'],
                    'ENTITY_ID' => $entityId,
                    'TEMPLATE' => $newPropValue
                ]);
            }
        }

        $iPropValuesClass = $this->getIPropValuesClassByType($arEntity['ENTITY_TYPE']);
        $ipropValues = new $iPropValuesClass($iblockId, $entityId);
        $ipropValues->clearValues();
    }
    
    /**
     * @param string $ormClass
     * @param array $filter
     * @return int
     * @throws HelperException
     */
    protected function getEntityId(string $ormClass, array $filter): int
    {
        $element = $ormClass::getList([
            'select' => ['ID'],
            'filter' => $filter,
            'limit' => 1,
        ])->fetch();
        if (!$element) {
            throw new HelperException("Could not find " . json_encode($filter) . " at " . $ormClass);
        }
        return intval($element['ID']);
    }
    
    /**
     * @param string $uid
     * @return int
     * @throws HelperException
     */
    protected function getIblockId(string $uid): int
    {
        $result = $this->getHelperManager()->Iblock()->getIblockIdByUid($uid);
        if (!$result) {
            throw new HelperException("Iblock " . $uid . " not found");
        }
        return $result;
    }
    
    /**
     * @param mixed $type
     * @return string
     * @throws HelperException
     */
    protected function getCodePrefixByType(mixed $type): string
    {
        return $this->getByType($type, 'SECTION_', 'ELEMENT_');
    }
    
    /**
     * @param mixed $type
     * @return string
     * @throws HelperException
     */
    protected function getOrmClassByType(mixed $type): string
    {
        return "\\" . $this->getByType($type, SectionTable::class, ElementTable::class);
    }
    
    /**
     * @param mixed $type
     * @return string
     * @throws HelperException
     */
    public function getIPropValuesClassByType(mixed $type): string
    {
        return "\\" . $this->getByType($type, SectionValues::class, ElementValues::class);
    }
    
    /**
     * @param mixed $entityType
     * @param mixed $sectionResult
     * @param mixed $elementResult
     * @return mixed
     * @throws HelperException
     */
    protected function getByType(mixed $entityType, mixed $sectionResult, mixed $elementResult): mixed
    {
        return match ($entityType) {
            'S' => $sectionResult,
            'E' => $elementResult,
            default => throw new HelperException("Undefined ENTITY_TYPE: " . $entityType),
        };
    }
}
```

## XML файл

`up|down` `iproperties.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<items iblockUid="catalog:IB_CATALOG" exchangeVersion="2">
    <item>
        <field name="CODE">
            <value>code</value>
        </field>
        <field name="ENTITY_TYPE">
            <value>E</value>
        </field>
        <field name="IBLOCK_UID">
            <value>catalog:IB_CATALOG</value>
        </field>
        <field name="META_TITLE">
            <value>Meta title</value>
        </field>
        <field name="META_DESCRIPTION">
            <value>Meta description</value>
        </field>
        <field name="PAGE_TITLE">
            <value>Page title</value>
        </field>
    </item>
</items>
```

## Миграция наследование

```php
<?php

namespace Sprint\Migration;

require_once __DIR__ . '/Version20241231000000.php';

class Version20240101000000 extends Version20241231000000
{
    protected $description = "Описание";

    protected $moduleVersion = "4.2.4";
}
```
