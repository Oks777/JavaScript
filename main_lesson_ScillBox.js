'use strict';
let greeting = 'Доброй ночи';
function printHello(firstName, lastName) {
  firstName = firstName || 'Пользователь';
  lastName = lastName || 'Тестовый';

  let greeting = "Эй";
  let fullName = firstName + ' ' + lastName;

  alert(greeting + ',' + fullName + '!');
 }

printHello('Иван', 'Сидоров');
alert(greeting);
