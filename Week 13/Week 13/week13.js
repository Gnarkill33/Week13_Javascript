//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

/*const today = new Date();
const currentDate = today.getDate();
console.log(currentDate);*/

//****************************************************************************************************************************************

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

/*const today = new Date(); 
const currentYear = today.getFullYear();
console.log(currentYear);*/

//****************************************************************************************************************************************

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

/*const today = new Date(); 
const currentMonth = today.getMonth();
console.log(currentMonth);*/

//****************************************************************************************************************************************

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

/*const today = new Date();
const currentDay = today.getDay();
console.log(currentDay);*/

//****************************************************************************************************************************************

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

/*1 вариант:
const birthday = new Date(1987, 12, 22); // 22.12.1987
const birthdayDate = birthday.getDate(); // 22
const birthdayMonth = birthday.getMonth(); // 0
const today = new Date();
const year = today.getFullYear();

console.log(`${birthdayDate}.${birthdayMonth + 12}.${year}`);*/


/*2 вариант:
const birthday = new Date(2023, 12, 22);
console.log(birthday);*/

//****************************************************************************************************************************************

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

/*const today = new Date();
const futureDateInMilliseconds = (today.setDate(today.getDate() + 10), today.setMonth(today.getMonth() + 1));
const futureDate = new Date(futureDateInMilliseconds);
console.log(futureDate);*/

//****************************************************************************************************************************************

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

/*const currentDate = new Date();
const currentDateInMilliseconds = currentDate.getTime();

const futureDateInMilliseconds = (currentDate.setDate(currentDate.getDate() + 10), currentDate.setMonth(currentDate.getMonth() + 1));

const difference = Math.round((futureDateInMilliseconds - currentDateInMilliseconds) / (1000 * 60 * 60 * 24));
console.log(difference);*/

//****************************************************************************************************************************************

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

/*const currentDate = new Date();
const pastDate = new Date(currentDate.setDate(currentDate.getDate() - 5));
console.log(pastDate);*/

//****************************************************************************************************************************************

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

/*const currentDate = new Date();
const currentDateInMilliseconds = currentDate.getTime();

const pastDateInMilliseconds = currentDate.setDate(currentDate.getDate() - 5);

const difference = Math.round((currentDateInMilliseconds - pastDateInMilliseconds) / (1000 * 60 * 60 * 24));  
console.log(difference);*/

//****************************************************************************************************************************************

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

/*const currentDate = new Date();
const nextWeek = new Date(currentDate.setDate(currentDate.getDate() + 7));
console.log(nextWeek);*/

//****************************************************************************************************************************************

//Задание 11
// Выведите в консоль день недели для nextWeek

/*const currentDate = new Date();
const nextWeek = new Date(currentDate.setDate(currentDate.getDate() + 7));
const dayNextWeek = nextWeek.getDay();
console.log(dayNextWeek);*/

//****************************************************************************************************************************************

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

/*const currentDate = new Date();
const futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);*/

//****************************************************************************************************************************************

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

/*const birthday = new Date(1987, 12, 22); // 22.12.1987
const birthdayDate = birthday.getDate(); // 22
const birthdayMonth = birthday.getMonth(); // 0
const today = new Date();
const futureYear = today.getFullYear() + 1;
const futureDateInFutureYear = `${birthdayDate}.${birthdayMonth + 12}.${futureYear}`;

console.log(futureDateInFutureYear);*/

//****************************************************************************************************************************************

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

/*const now = new Date();
const currentYear = now.getFullYear(); // 2023
const futureYear = now.getFullYear() + 5; // 2028

const difference = futureYear - currentYear;
console.log(difference)*/

//****************************************************************************************************************************************

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.

/*const strDate = '2023-06-15T08:30:00.000Z';
const date = new Date(Date.parse(strDate));
console.log(date);*/

//****************************************************************************************************************************************

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

/*const strDate = '2023-06-15T08:30:00.000Z'
const timeStamp = Date.parse(strDate);
console.log(timeStamp);*/


//****************************************************************************************************************************************

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
// const date = '2023/06/15';

/*const date = '2023/06/15';
const wrongDate = Date.parse(date);
console.log(wrongDate);

if (wrongDate === NaN){
    console.log('Неправильный формат даты');
}
else{
    console.log('Правильный формат даты');
}*/

//****************************************************************************************************************************************

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.

/*const number = 231;
if (number > 0){
    console.log('Переменная положительная');
}
else {
    console.log('Переменная отрицательная');
}*/

//****************************************************************************************************************************************

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

/*const number = 231;
if (number % 2 === 0){
    console.log('Четное число');
}
else{
    console.log('Нечетное число');
}*/

//****************************************************************************************************************************************

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

/*const number = 231;
if (number % 3 === 0){
    console.log('Кратно 3');
}
else{
    console.log('Некратно 3');
}*/

//****************************************************************************************************************************************

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.

/*const number = 231;
if (number >= 0 && number < 10) {
    console.log('Однозначное число');
}
else {
    console.log('Неоднозначное число');
}*/

//****************************************************************************************************************************************

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

/*const number = 231;
if (number >= 10 && number < 100){
    console.log('Двузначное число');
}
else {
    console.log('Недвузначное число');
}*/

//****************************************************************************************************************************************

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

/*const number = 231;
if (number === 0){
    console.log('Нуль');
}
else if (number > 0) {
    console.log('Положительное число');
}*/

//****************************************************************************************************************************************

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

/*const number = 231;
if (number % 5 === 0){
    console.log('Кратно 5');
} 
else if (number % 7 === 0){
    console.log('Кратно 7');
}*/

//****************************************************************************************************************************************

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

/*const number = 231;
if (number === 0){
    console.log('Нуль');
}
else if (number < 0){
    console.log('Отрицательное число');
}
else {
    console.log('Неотрицательное число и не нуль');
}*/

//****************************************************************************************************************************************

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

/*const number = 231;

if (number > 0 && number > 99 && number <= 999){
    console.log('Трехзначное положительное число');
}
else if (number < 0 && number > 99 && number <= 999){
    console.log('Трехзначное отрицательное число');
}
else {
    console.log('Не является трехзначным положительным числом');
}*/

//****************************************************************************************************************************************

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

/*let day = '';

const printDay = () => {

switch (parseInt(day)){
    case 1:
        day = 'понедельник';
        break;
    case 2:
        day = 'вторник';
        break;
    case 3:
        day = 'среда';
        break;
    case 4:
        day = 'четверг';
        break;
    case 5:
        day = 'пятница';
        break;
    case 6:
        day = 'суббота';
        break;
    case 7:
        day = 'воскресенье';
        break;
    default:
        day = 'неизвестно';
}

console.log(`Сегодня ${day}.`);
}

printDay();*/

//****************************************************************************************************************************************

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").

/*const direction = '';
const fullName;

const getDirection = () => {
switch (direction) {
    case 'W':
        fullName = 'Запад';
        break;
    case 'N':
        fullName = 'Север';
        break;
    case 'S':
        fullName = 'Юг';
        break;
    case 'E':
        fullName = 'Восток';
        break;
    default:
        fullName = 'Неизвестное направление';
}

console.log(fullName);
}

getDirection();*/
