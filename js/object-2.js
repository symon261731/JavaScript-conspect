
// МЕТОДЫ ОБЪЕКТОВ
/*
let user = {
    name: 'Simon',
    age: 24,
}

user.sayHi = function () {
    return console.log('Hello there');
};
*/
/*
let user = {
    name: `simon`,
    age: 24,
    work: `geophysicist`,
    untroduction() {
        alert(` hello where ${this.name}, you are ${this.age} years old and you are ${this.work}, isn't it?`);
        console.log(` hello where ${this.name}, you are ${this.age} years old and you are ${this.work}, isn't it?`)
    }
};
console.log(user);
console.log(user.name);
console.log(user.age);

user.untroduction();
*/
/*
function sayHi() {
    alert(this.name);
}

let first = {
    name: 'first'
}

let second = {
    name: ' second'
}

first.f = sayHi;
second.f = sayHi;

first.f();
second.f();
*/
/*
let user = {
    name: 'jonh',
    go: function () {
        alert(this.name)
    }
};//прикол в точке с запятой т.к. она не ставиться автоматически перед открывающей скобкой (
(user.go());
*/
/*
let calculator = {};

calculator.read = function () {
    let first = prompt('введите первое число');
    calculator.first = Number(first);
    let second = prompt('введите второе число');
    calculator.second = Number(second);
}
calculator.sum = function () {
    return calculator.first + calculator.second;
}
calculator.mul = function () {
    return calculator.first * calculator.second;
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/
/*
let user = {
    name: 'Jonh',
    money: 1000,
    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
};

alert(user);
alert(+user);
alert(user + 500);
*/
//БОЛЕЕ СТАРЫЙ МЕТОД
/*
let user = {
    name: 'Jonh',
    money: 1000,
    toString() {
        return `{name: "${this.name}"}`;
    },
    valueOf() {
        return this.money;
    },
}
alert(user);
alert(+user);
alert(user + 500);
*/

/*
let user = {
    name: "Jonh",
    toString() {
        return this.name;
    }
};
alert(user);
alert(user + 500);
*/
// калькулятор с конструктором
/*
function Calculator() {
    this.read = function () {
        /*let first = prompt('введите первое число');
        this.first = Number(first);
        let second = prompt('введите второе число');
        this.second = Number(second);
        this.first = Number(prompt(`Введите первое число`));
        this.second = Number(prompt(`Введите второе число`));
    };
    this.sum = function () {
        return this.first + this.second;
    };
    this.mul = function () {
        return this.first * this.second;
    };
}

let calculator = new Calculator();

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/
/*

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value = this.value + (+prompt('number'));
    }
}

let accumulator = new Accumulator(3);

accumulator.read();
accumulator.read();

alert(accumulator.value);*/




function Accumulator(zeroValue) {
    this.value = zeroValue;

    this.read = function () {
        this.value = + this.value + Number(prompt('Какое число добавить?'));
    }
}

let accumulator = new Accumulator(4);

accumulator.read();
accumulator.read();

alert(accumulator.value);













