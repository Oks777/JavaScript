
let age = 80;
let age_2 = 18;
let age_3 = 60;

const checkAge = function(age) {

 //age = Number(age) 
 //if (!isNaN(age)) {
 //if(Number(age))  {
      if(+age) {

    if (age < age_2) {
        console.log('You don’t have access cause your age is ' + age + '. It’s less then ' + age_2)
    }
    else if (age >= age_2 < age_3) {
        console.log('Welcome')
    }
    else if(age > age_3) {
        console.log('Keep calm and look Culture channel')
    } else {
        console.log('Technical work')
    }
} else { console.log('Not interger value')}
} 

checkAge(17)
checkAge('-60')
checkAge('22aaa')

let agePromt = promt('Enter age')
checkAge(agePromt)


// Я хз!!!((  Хотя вроде работает...