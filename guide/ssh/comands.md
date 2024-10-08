# SSH команды

## Информация о системе

`arch` Архитектура компьютера\
`lscpu`	Информация о процессоре\
`vmstat`	Текущая загрузка процессора\
`uname`	Версия ядра\
`lsmod`	Вывести загруженные модули ядра\
`last` reboot	История перезагрузок системы\
`free`	Сколько используется памяти\
`free -m`	Состояние оперативной памяти\
`df`	Вывести информация о дисках\
`du`	Вывести, сколько памяти занимает текущий каталог

## Процессы

shutdown -h now	Остановить систему
exit	Выйти из системы
reboot	Перезагрузка сервера
ps	Показать активные процессы
top	Показать все процессы (с обновлением)
pstree	Вывести дерево процессов
bg	Вывести список фоновых задач
whereis программа	Место расположения программы
kill процесс	Убить процесс
killall название	Убить все процессы по имени

## Дата и время

date	Вывести дату и время
cal	Вывести календарь
uptime	Вывести аптайм

## Пользователи

whoami	Вывести логин
finger юзер	Вывести информацию о пользователе
last юзер	Вывести историю активности

## Уровни доступа

chmod 755 файл	Задает файлу права 755
chown юзер файл	Назначить файлу владельца
chgrp группа файл	Назначить файлу группу-владельца

## Файлы и директории

tree	Вывести дерево файлов и директорий
pwd	Вывести текущую директорию
which файл	Вывести полный путь к файлу
ls	Показать список файлов в текущей директории
ls -al	Показать все файлы на сервере
ls -a	Показать скрытые файлы и директории
cd	Перейти в домашнюю директорию
cd директория	Перейти в указанную директорию
cd ..	Перейти в директорию уровнем выше
mv директория директория1	Переименовать или переместить файл или директорию
cp файл файл2	Скопировать файлы
mkdir директория	Создать директорию
mkdir директория1 директория2	Создать две директории одновременно
mkdir -p /директория1/директория2/	Создать дерево директорий
rm -rf директория	Удалить директорию с содержимым
rmdir директория	Удалить директорию
touch файл	Создать файл
rm файл	Удалить файл

## Ссылки

ln файл ссылка	Создать ссылку на файл или директорию
ln -s файл ссылка*	Создать символическую ссылку на файл или директорию

## Просмотр содержимого файлов

more файл	Вывести содержимое файла
head файл	Вывести первые 10 строк из файла
tail файл	Вывести последние 10 строк из файла

## Поиск

grep слово файл	Ищет «слово» в «файле»
locate файл	Найти все файлы с именем «файл»
find / -name слово	Найти файлы и директории по имени
find / -user юзер	Найти файлы и директории, принадлежащие пользователю

## Интернет и сети

hostname	Вывести имя компьютера
ping 192.168.0.1	Пинг до хоста
netstat -rn	Вывести локальную таблицу маршрутизации
ip link show	Отобразить состояние всех интерфейсов
whois example.com	WHOIS домена
dig example.com	Вывести DNS домена
wget ссылка	Загрузит файл из интернета в текущую директорию на сервере

