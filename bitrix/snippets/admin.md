---
title: 'Битрикс admin'
#titleTemplate: false
description: 'Битрикс — Admin'
---

# Admin

## Восстановить доступ администратора
```php
<?php
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
// установить новый пароль у пользователя с ID = 1
echo $USER->Update(1, ['PASSWORD' => 'Bitrix*123456']);
echo $USER->LAST_ERROR;
// удаление файла после авторизации
@unlink(__FILE__);
LocalRedirect('/bitrix/admin/');
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php');
?>
```

## Блокировка доступа в админ. панель по IP-адресу (Forbidden Access denied)
Закомментировать строчки в файле — `bitrix/modules/main/include.php`
```php
# ~188 строка
foreach (GetModuleEvents("main", "OnPageStart", true) as $arEvent)
{
	ExecuteModuleEventEx($arEvent);
}
```

## Авторизация под админом
```php
<?php
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
global $USER;
$USER->Authorize(1);
@unlink(__FILE__); // удаление файла после авторизации
LocalRedirect('/bitrix/admin/');
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php');
?>
```

## Создать пользователя с правами админа
```php
<?php
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$newlogin = 'userName'; // login
$newemail = 'example@mail.com'; // mail
$newpassword = 'Bitrix*123456'; // password
$group = array(1);
$user = new CUser;
$arFields = [
    "EMAIL" => $newemail,
    "LOGIN" => $newlogin,
    "LID" => "ru",
    "ACTIVE" => "Y",
    "GROUP_ID" => $group,
    "PASSWORD" => $newpassword,
    "CONFIRM_PASSWORD" => $newpassword
];
$ID = $user->Add($arFields);
if (intval($ID) > 0) {
    echo 'Администратор создан';
} else {
    echo $user->LAST_ERROR;
}
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php');
?>
```
