// let item_1 = 5
// console.log(item_1);

// let item_2 = 3
// console.log(item_2);

// let item_3 = item_1 + item_2
// console.log(item_3);

// let item_4 = "Yolochka"
// console.log(item_4);

// let group = item_3 + item_4
// console.log(group);

// let group_1 = item_3*item_4
// console.log(group_1);

// let item_5 = (item_3)

// let item_6 = 15
// let item_6_type = Number (item_6)

// 21 пункт (?) -- item_6 == 15 item_6_type 15 --


// let item_7 = String(item_6)
// let item_7_type = String (item_7)

// // 25 (?) -- item_7 == 15 item_7_type 15 -- 

let age_1 = 15
let age_2 = 18
let age_3 = 60

if (typeof(age_1) == "number"){
    if (age_1 < age_2) {
        console.log("You don’t have access cause your age is " + age_1 + " It’s less then")
    }
    else if (age_1 >= age_2 < age_3) {
        console.log("Welcome")
    }
    else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
    }
} else {
    console.log("Technical work")
}

// Где-то неправильно((( Не выводит правильно если 1 значение больше 3 (например 80 лет)