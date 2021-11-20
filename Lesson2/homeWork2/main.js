// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 30;
//
// if (time <= 15) {
//     console.log('1 quarter of an hour');
// }
// if (time > 15 && time <= 30) {
//     console.log('2 quarter of an hour');
// }
// if (time > 30 && time <= 45) {
//     console.log('3 quarter of an hour');
// }
// if (time > 45 && time <= 59) {
//     console.log('4 quarter of an hour')
// }else if (time > 59) {
//     console.log('axaxaxaxax')
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = 32;
//
// if (day <= 10) {
//     console.log('1 decade');
// }
// if (day > 10 && day <= 20) {
//     console.log('2 decade')
// }
// if (day > 20 && day <= 31) {
//     console.log('3 decade')
//
// }else if (day >31) {
//     console.log('not decade')
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//
// let test = true;
// if (test) {
//     console.log('yeas');
// } else {
//     console.log('NO');
// }


//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let a = 1;
// if (a !== 0) {
//     console.log('Вірно!');
// } else {
//     console.log('Невірно');
// }
//
// let a = 1;
//
// let y = (a !== 0) ? 'Вірно!' : 'Невірно';
// console.log(y);
//
//
//
// let x = 2;
// if (x === 1) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно!')
// }
//
// let x = 2;
//
// let y = (x === 1) ? 'Вірно' : 'Невірно';
// console.log(y);
//
//
//
// let b = 0;
// if (b === 0) {
//     console.log('Вірно');
//
// } else {
//     console.log('Невірно!')
// }
// let b = 0;
//
// let y = (b === 0) ? 'Вірно' : 'Невірно';
// console.log(y);
//
//
//
// let d = -3;
//
// if (d === -3) {
//     console.log('Вірно');
//
// } else {
//     console.log('Невірно!')
// }
// let d = -3;
// let y = (d === -3) ? 'Вірно' : 'Невірно';
// console.log(y);


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// let userEnter = +prompt('Enter the week number!');
//
// switch (userEnter) {
//     case 1:
//         document.write(`<div><h1>dadasdas 1</h1></div>`);
//         break;
//     case 2:
//         document.write(`<div><h1>asdasdasd 2</h1></div>`);
//         break;
//     case 3:
//         document.write(`<div><h1>asdasdasd 3</h1></div>`);
//         break;
//     case 4:
//         document.write(`<div><h1>asdasdasd 4</h1></div>`);
//         break;
//     default:
//         document.write(`<div><h1>What!??</h1></div>`)
//        
// }

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let ask = prompt('Яка «офіційна» назва JavaScript?');
//
// if (ask === 'ECMAScript') {
//     console.log('Правильно!');
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }


