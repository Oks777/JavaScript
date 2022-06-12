let myName = prompt('Как вас зовут?');
let myBirth = prompt ('Введите ваш год рождения');

let currentYear = 2021;
let age = currentYear - myBirth;

if (age < 20) {
  alert ('Привет,' + myName + '!');
}
else if (age >= 20 && age < 40) {
alert ('Добрый день,' + myName + '!');
}
else {
alert ('Привет,' + myName + '!');
}
