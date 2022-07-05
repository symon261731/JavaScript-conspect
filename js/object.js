/*
let num = 8;
while (num) {
    console.log(num);
    num--;
}
*/


/*
let user = {};
user = {
    name: "simon",
    age: "24",
}
*/

/*
let key = prompt("Чтобы вы хотели узнать о пользователе?", "name");
alert(user[key]);
let fruit = prompt("Какой фрукт сегодня купить");
let bag = {
    [fruit]: 5,
};
alert(bag.banana);
*/

/*
let codes = {
    "+41": " Germany",
    "+42": "another country",
    "+45": "third country",
    "+1": "USA",
    "+7": "Russia",
};
codes["+5123"] = "pacistan";
for (code in codes) {
    alert(+code);
}
*/

/*
let myName = prompt("name");
let age = prompt('ages');
let sex = prompt('male or female');
let user = {
    name: `${myName}`,
    age: age,
    sex
}

let permission1 = { canWatch: true };
let permission2 = { canEdit: true };

Object.assign(user, permission1, permission2);

for (key in user) {
    alert(key);
}
*/
/*
let user = {};
user.name = "simon";
user.surname = "mishchenko";
for (key in user) {
    alert(user[key]);
}

user.name = "pete";
alert(user.name);

delete user.name;

alert(user["name"]);
*/
/*
let empty = {};
function isEmpty(obj) {
    if (obj == empty) {
        return true;
    } else {
        return false;
    }

};
console.log(typeof isEmpty);
let schedule = {};

console.log(isEmpty(schedule));

//schedule.startOfLesson = "8:30 P.M";

for (key in schedule) {
    console.log(key);
}
*/




/*
function isEmpty(obg) {
    for (let key in obg) {
        if (key == undefined) {
            return true;
        }
        else {
            return false;
        }
    }
}

let emptyObject = {};
console.log(isEmpty(emptyObject));

*/



let salaries = {
    Jonh: 100,
    Ann: 160,
    Pete: 0,
};

let sum = 0;

for (prop in salaries) {
    sum = sum + salaries[prop];
}

alert(sum);




