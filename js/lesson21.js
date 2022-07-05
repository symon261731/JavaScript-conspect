'use strict';


/*
let someArray = [];


// Массивы
someArray.push("Hello where");  // наподобие с user.name = "simon";
someArray.push(" number 1 ");
console.log(typeof someArray);
console.log(someArray);
// Массив это некое количетсво данных
// У каждой записи массива есть индекс
// Так же есть у массива length

console.log(someArray.length);

// если мы хотим получить какую-нибидь запись из массива то мы можем
console.log(someArray[1]); // указать какая именно запись нам нужна
console.log(someArray[0]);
*/



//DOM
//const listItems = document.querySelectorAll(`.list__item`);
//document.querySelectorAll служит для обращения по html селектору
//('.') по каким параметрам ищем нужную часть

//  forEach бегает по каждому элементу коллекции или массива

//listItems.forEach(function (listItem, index, /*array*/) { //list item - объект, index - ключ, array- сам массив
//    console.log(`Объёкт ${listItem} под номером ${index}`)
//    console.log(index);
//    console.log(listItem);
//});
//console.log(listItems);


/*
const listItems = document.querySelectorAll('.list__item');
listItems.forEach(function (listItem, index) {
    console.log(`объект ${listItem} и его номер ${index}`);
});
console.log(listItems);

// если используется просто querySelector то мы получаем доступ просто к первому объекту
const listItem = document.querySelector('.list__item');
console.log(listItem);
//если используется querySelectorAll то мы поулчаем доступ к коллекции объектом
const listExample = document.querySelectorAll('.example__list');
console.log(listExample);
*/

// А теперь к реальному примеру
// Манипуляция классами
//const list = document.querySelector('.list');
// classList - получаем доступ к ul class= "list"
//list.classList.add('active'); //добавить
//list.classList.remove(); //убрать
//list.classList.toggle(); // если есть то убрать , если нету то добавить
// ВО ВСЕХ НИХ НЕ СТАВИТЬ ТОЧКУ
/*
if (list.classList.contains('list')) {
    console.log(" Да содержит!");
}
*/
//может вызникнуть ситуация когда мы пытаемся получить доступ к классу которого уже нет
//например
/*
const listElement = document.querySelector('.list2'); //такого класса нет
// в этом случае нжуно делать более сложную проверку
if (listElement && listElement.classList.contains('list')) {
    console.log("YE BOY");
} else {
    console.log("NO BOY");
}
// в этом случае из-за того что, нет класса list2 на возвращается NO BOY
*/
/*
const listItems = document.querySelectorAll('.list__item');
listItems.forEach(function (listItem, index) {
    if (listItem.classList.contains('list')) {
        console.log(`в цикле ${index} содержится list__item ${listItem}`);
    } else {
        console.log(`в ${index} цикле не содержится класса list__item ${listItem}`)
    }
});
*/


/*
//первая собственно получившаяся программка)

const listItems = document.querySelectorAll('.list__item');

listItems.forEach(function (listItem, index) {
    if (listItem.classList.contains('active')) {
        listItem.classList.remove('active');
        console.log(`в цикле ${index} был удален class active`);
    } else {
        console.log(` в цикле ${index} нету класса active`)
    }
});
*/






// СОБЫТИЯ
/*
const someButton = document.querySelector('.button');
//проверка на существование
if (someButton) {
    // вешаем прослушку
    //addEventLlistener  добавить прослушивание события
    let someNum = 0;
    someButton.addEventListener("click", function (e) {
        console.log("Yep");
        someNum++;
        if (someNum === 3) {
            console.log("Кнопка нажата 3 раза");
        }
        if (someNum === 6) {
            console.log('Кнопка нажата 6 раз');
        }
    });
};
*/



//MENU
//1 opportunity
/*
1) получаем объект бургер
2) получаем объект меню которое нужно открыть
3) вышаем обработчик собития click 1
4) добавляем класс к бургеру 1
5) добавляем класс меню 2
*/
/*
const menuBurger = document.querySelector(".some-menu__icon");
const menuBody = document.querySelector(".some-menu__body");

if (menuBurger) {
    menuBurger.addEventListener('click', function (e) {
        menuBurger.classList.toggle('_active');
        if (menuBody) {
            menuBody.classList.toggle('_active');
        }
    });
}
*/

//2 opportunity
/*
1)Получаем объект бургер
2) Получаем объект меню ( родительский)
3) вешаем обработчик
4) добавляем класс объекту меню п 2
*/
/*
const menuBurger = document.querySelector('.some-menu__icon');
//получаем родительский элемент menBurger с классом .some-menu
const menu = menuBurger.closest('.some-menu');

if (menuBurger) {
    menuBurger.addEventListener("click", function (e) {
        if (menu) {
            menu.classList.toggle(`menu_active`);
        }
    });
}
*/




//получаем коллекцию всех объектов с классом .list
/*const listItems = document.querySelectorAll('.list');
console.log(listItems);
//проверяем существует ли объекты
if (listItems.length) {
    // бегаем по каждому из них
    // listItem раздается в функции , в неё передается каждый из перебираемых объектов
    listItems.forEach(function (listItem) {
        // если у объекта есть предок с классом .block
        if (listItem.closest('.block')) {
            //добавляем класс .active
            listItem.classList.add('_active');
        }
    });
}
*/
/*
const listItems = document.querySelectorAll('.list__link');

if (listItems.length) {
    listItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            listItem.classList.toggle('_active');
            // отмена действия по умолчанию
            e.preventDefault();
        });
    });
};
*/
/*




ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
вешаем прослушку на весь документ
    document.addEventListener("click", function (e) {
        //получаем объект на который кликнули
        const targetElement = e.target;
        console.log(targetElement);
    если кликнутый объект содержит .list__link то
    если использовать contains то можно напороться на проблему
    Так как target выводит при клике самый внутренний класс
    т.е если я оберну <a> в <span> то кликаться будет спан   |
    if (targetElement.classList.contains('list__link')) {//  |
        targetElement.classList.toggle('_active');//         |
        e.preventDefault();//                                |
    }//                                                      |
});//                                                        |
//                                               чтобы это решить нужно сделать следующее
//                                                 if( targetElement.closest('list__link'){
//                                                               targetElement.classList.toggle('_active');
//                                                 }
*/
//в итоге получаем
/*
const listLinks = document.querySelectorAll('.list__link');
document.addEventListener('click', function (e) {
    const targetElement = e.target;
    console.log(targetElement);
    if (targetElement.closest('.list__link')) {
        targetElement.closest('.list__link').classList.toggle('_active');
    } else {
        const listLinks = document.querySelectorAll('.list__link');
        removerClasses(listLinks, '_active');
    }// либо ELSE выше либо 
    //      вот этот 
    //{
    //  listLinks.forEach(function (listLink) {
    //      listLink.classList.remove('_active');
    //  });
    if (targetElement.closest('.button-clear')) {
        removerClasses(listLinks, '_active')
    }
});
//создаем функцию для удаления классов 
function removerClasses(elements, className) {
    elements.forEach(function (element) {
        element.classList.remove(className);
    });
}
*/


const listLinks = document.querySelectorAll('.list');
document.addEventListener('click', function (e) {
    const targetElement = e.target;
    console.log(targetElement);
    if (targetElement.closest('.list__link')) {
        targetElement.classList.toggle('_active');
    } else {
        const listLinks = document.querySelectorAll('.list__link')
        removerClasses(listLinks, '_active');
    }
});



function removerClasses(elements, className) {
    elements.forEach(function (element) {
        element.classList.remove(className);
    });
}