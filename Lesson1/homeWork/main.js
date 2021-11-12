
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

// let a = 'hello';
// let b = 'owu';
// let c = 'com';
// let d = 'ua';
// let e = 1;
// let f = 10;
// let g = -999;
// let h = 123;
// let j = 3.14;
// let k = 2.7;
// let bool1 = true;
// let bool2 = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(j);
// console.log(k);
// console.log(bool1);
// console.log(bool2);
//
// document.write(a + '</br>');
// document.write(b + '</br>');
// document.write(c + '</br>');
// document.write(d + '</br>');
// document.write(e + '</br>');
// document.write(f + '</br>');
// document.write(g + '</br>');
// document.write(h + '</br>');
// document.write(j + '</br>');
// document.write(k + '</br>');
// document.write(bool1 + '</br>');
// document.write(bool2 + '</br>');

// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(j);
// alert(bool1);
// alert(bool2);


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//
// let firstName = 'Nazar';
// let middleName = 'Yurievich';
// let lastName = 'Sergeev';
//
// let person = `${firstName} ${middleName} ${lastName}`;
//
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let firstName = prompt('What`s your name????');
// let middleName = prompt('What`s your middle name????');
// let lastName = prompt('What`s your last name????');
//
// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//
// let age = prompt('How old are you?');
//
// console.log(age);
//
// alert(`Hey, ${firstName} ${middleName} you are ${age} years old`)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
//     let a = 100;
//     let b = '100';
//     let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// console.log(5 < 6) //-> true
// console.log(5 > 6) //-> false
// console.log(5 >= 6) //-> false
// console.log(5 == 6) //-> false
// console.log(10 <= 10); //-> true
// console.log(10 >= 10);//-> true
// console.log(10 !== 10); //-> false
// console.log(10 != 10) //-> false
// console.log(10 < 10); //-> false
// console.log(123 === '123'); //-> false
// console.log(123 == '123') //-> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//
//     let str = "20";
//     let a = 5;
//     document.write(str + a + "<br/>"); //- "а" преобразовалась в строку (бинарный плюс) приводит переменные к строкам
//     document.write(str - a + "<br/>"); //- "str" преобразовалась в число, т.к. все операторы кроме бинароного плюса преобразовывают все переменные в числа
//     document.write(str * "2" + "<br/>");//- "str" преобразовалась в число, т.к. все операторы кроме бинароного плюса преобразовывают все переменные в числа
//     document.write(str / 2 + "<br/>");//- "str" преобразовалась в число, т.к. все операторы кроме бинароного плюса преобразовывают все переменные в числа

// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
//
// let numbers = [1, 3, 7, 4, 8, 9, 2, 12, 15, 17];
//
// let result = numbers[0] + numbers[1] +  numbers[2] +  numbers[4] +  numbers[4] +  numbers[5] +  numbers[6] +  numbers[7] +  numbers[8] +  numbers[9];
// console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
//
// let book1 = {
//     name: 'Harry Potter',
//     number: 245,
//     genre: 'fantastic'
// }
// console.log(book1);
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
//
// let book2 = {
//     author: 'Joanne Rowling',
//     name: 'Harry Potter',
//     number: 245,
//     genre: 'fantastic'
// }
// console.log(book2);


// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//
// let books = [
//     book1 = {
//         author: 'Vasya',
//         name: 'hope for faith',
//         number: 142,
//         genre: 'documentation'
//     },
//     book2 = {
//         author: 'Joanne Rowling',
//         name: 'Harry Potter',
//         number: 245,
//         genre: 'fantastic'
//     }
// ];
// console.log(books[0]);
// console.log(books[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
//
// let height = 23;
// let width = 10;
//
// let s = height * width;
// console.log(s);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
//
// let heightC = 10;
// let dC = 4;
// let p = 3.14;
// let r = dC / 2;
// let pl = (r ** 2) * p;
// let v = pl * heightC;
//
// console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).