// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// document.getElementById('main_header').innerText = 'sep-2021'

// b) робить шириниу елементу ul 400px
// let elementsUl = document.getElementsByTagName('ul');
// for (const element of elementsUl) {
//     element.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let elementsByClassName = document.getElementsByClassName('linkList');
// for (const item of elementsByClassName) {
//     item.style.width = '50 %';
//    
// }

// d) отримує текст який зберігається в елементі з класом listElement2
//     let elementsByClassName = document.getElementsByClassName('listElement2');
//     for (const e of elementsByClassName) {
//         console.log(e.innerText);
//
//     }

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let elementsByTagName = document.getElementsByTagName('li');
// for (const e of elementsByTagName) {
//     e.style.background = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let tagNameA = document.getElementsByTagName('a');
// for (const item of tagNameA) {
//     item.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// let tagNameA = document.getElementsByTagName('a');
// for (const item of tagNameA) {
//     if (item.innerText === 'link3') {
//         item.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let tagNameA = document.getElementsByTagName('a');
// for (const item of tagNameA) {
//     item.classList.add(item.innerText);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const item of elementsByClassName) {
//     item.style.background = prompt('what color will you choose?');
//
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const item of elementsByClassName) {
//     if (item.innerText === 'content 2 segment') {
//         item.style.color = prompt('what color will you choose?')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elementsByClassName = document.getElementsByClassName('content_1');
// for (const item of elementsByClassName) {
//     item.innerText = prompt('enter text');
// }

// l) отримати елементи p та змінити їм padding на 20px
// let elementsByTagName = document.getElementsByTagName('p');
// for (const p of elementsByTagName) {
//     p.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let elementsByClassName = document.getElementsByClassName('text2');
// for (const item of elementsByClassName) {
//     item.innerText = 'sep-2021';
// }

