// Все робити за допомоги js.

// - створити блок,
// let divElement = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
// divElement.classList.add('wrap');
// divElement.classList.add('collapse');
// divElement.classList.add('alpha');
// divElement.classList.add('beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// divElement.style.background = 'blue';
// divElement.style.color = 'red';
// divElement.style.fontSize = '60px';

// - додати цей блок в body.
// document.body.appendChild(divElement);

// - клонувати його повністю, та додати клон в body.
// document.body.appendChild(divElement.cloneNode(true));

// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//     let array = ['Main','Products','About us','Contacts'];
//     let byClassName = document.getElementsByClassName('menu');
// for (const elementUl of byClassName) {
//     for (const item of array) {
//     let elementLi = document.createElement('li');
//         elementLi.innerText = `${item}`;
//     elementUl.appendChild(elementLi);
//     }
// }

// - Є масив
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${element.title} ${element.monthDuration}`;
//     document.body.appendChild(divElement);
// }
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// - Є масив
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let htmlDivElement = document.createElement('div');
//     htmlDivElement.classList.add('item');
//
//     let elementH1 = document.createElement('h1');
//     elementH1.classList.add('heading');
//     elementH1.innerText = item.title
//
//     let pElememnt = document.createElement('p');
//     pElememnt.classList.add('description');
//     pElememnt.innerText = item.monthDuration
//
//     htmlDivElement.appendChild(elementH1);
//     htmlDivElement.appendChild(pElememnt);
//     document.body.appendChild(htmlDivElement);
// }
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
