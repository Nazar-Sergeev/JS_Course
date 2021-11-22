
////                                home            work

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function squareR(a, b) {
//     return a * b;
// }
// console.log(squareR(10, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function squareCircle(p, r) {
//     let radius = (r * r);
//     return  p * radius;
// }
// console.log(squareCircle(3.14, 2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function squareC(p, r, h) {
//     return 2 * p * r * h;
// }
// console.log(squareC(3.14, 3, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function showArray1() {
// let numbers = [2, 17, 13, 6, 22, 31, 45, 6, 100, -18];
//     for (let item of numbers) {
//         console.log(item)
//     }
// }
// showArray1();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function creator(text) {
//     document.write(`<p>${text}</p>`)
//
// }
// creator('Hello Okten');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function create(text) {
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// create('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//     function create2(text, size) {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// create2('Hello Okten', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function buildingList () {
// let numbers = [2, '17', 13, '6', 22, 31, 45, 6, '100', true, false];
//         document.write(`<ul>`)
//     for (let item of numbers) {
//         document.write(`<li>${item}</li>`)
//     }
//         document.write(`</ul>`)
// }
// buildingList();

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//
// function showArray2() {
//     let array = [
//         {
//             id: 1,
//             name: 'Vasya',
//             age: 25
//         },
//         {
//             id: 2,
//             name: 'Tolya',
//             age: 30
//         },
//         {
//             id: 3,
//             name: 'Tanya',
//             age: 26
//         }
//     ];
//     for (let element of array) {
//         document.write(`<div>${element.id} - ${element.name} - ${element.age}</div>`)
//     }
// }
// showArray2();

////                                class           work

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// }
//
// minNumber(3, 2, 5,);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function maxNumber(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     }else if (b > a && b > c) {
//         console.log(b);
//     }else if (c > a && c > b) {
//         console.log(c);
//     }
// }
//
// maxNumber(14, 5, 8);

// - створити функцію яка повертає найбільше число з масиву
// function maxNumberArray() {
//     let numbers = [2, 17, 130, 6, 22, 31, 45, 6, 100, -18];
//     let max = numbers[0];
//     for (let number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max;
//
// }
// console.log(maxNumberArray());

// - створити функцію яка повертає найменьше число з масиву
//
// function minNumberArray() {
//     let numbers = [2, 17, 130, 6, 22, 31, 45, 9, 100, -18];
//         let min = numbers[0];
//     for (let number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//
//     }
//     return min;
// }
//
// console.log(minNumberArray());

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum() {
//         let numbers = [2, 17, 130, 6, 22, 31, 45, 9, 100, 18];
//     let result = 0;
//     for (let num of numbers) {
//         result = result + num;
//     }
//     return result;
// }
// console.log(sum());

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function average() {
//             let numbers = [2, 17, 130, 6, 22, 31, 45, 9, 100, 18];
//     let result = 0;
//     for (let num of numbers) {
//         result = result + num;
//
//     }
// return result / numbers.length
// }
//
// console.log(average());


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function minMaxNum() {
//             let numbers = [2, 17, 130, 6, 22, 31, 45, 9, 100, 18];
//     let max = numbers[0];
//     let min = numbers[0];
//     for (let num of numbers) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//
//     }
//     console.log(max);
//     return min;
// }
// minMaxNum();

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function random() {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     return array;
// }
// console.log(random());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
//
// function randomLimit(limit) {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array[i] = Math.round(Math.random() * limit);
//     }
//     return array;
// }
//
// console.log(randomLimit(50));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// function reverseArray() {
//     let newArray = [];
//     let numbers = [2, 17, 130, 6, 22, 31, 45, 9, 100, 18];
//     for (let i = numbers.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArray[i] = numbers[i];
//     }
//     return newArray;
// }
//
// console.log(reverseArray());

/////                                     additional

// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function takesArg() {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     }else if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     }
// }
// takesArg();

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
//     [3,5,7,9]
// function returnNewArray() {
//     let arr1 = [1, 2, 3, 4];
//     let arr2 = [2, 3, 4, 5];
//     let newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         let num1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             let num2 = arr2[j];
//         if (i === j) {
//             newArray[i] = num1 + num2;
//             }
//         }
//     }
//     console.log(newArray)
//     return newArray;
// }
//
// returnNewArray();


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function foobar(array) {
//     let newArray = [];
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         let objectFromArr = array[i];
//         for (let item in objectFromArr) {
//             newArray[index++] = item;
//         }
//     }
//     console.log(newArray);
//     return newArray
// }
// foobar([{name: 'Dima', age: 13}, {model: 'Camry'}]);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// function foobar2(array) {
//     let newArray = [];
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         let element =array[i];
//         for (let item in element) {
//             newArray[index++] = element[item]
//         }
//     }
//     console.log(newArray);
//     return newArray
// }
// foobar2([{name: 'Dima', age: 13}, {model: 'Camry'}]);


