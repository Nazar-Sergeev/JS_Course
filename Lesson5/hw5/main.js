////                                    home work

//Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою
//
// let squareR = (a, b) => a * b;
// squareR(4, 2);

// - створити функцію яка обчислює та повертає площу кола
//
// let squareCircle = (p, r) => {
//     let radius = (r * r);
//     return  p * radius;
// }
// console.log(squareCircle(3.14, 2));

// - створити функцію яка обчислює та повертає площу циліндру
//
// let squareC = (p, r, h)=> 2 * p * r * h;
// console.log(squareC(3.14, 3, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let showArray1 = ()=> {
// let numbers = [2, 17, 13, 6, 22, 31, 45, 6, 100, -18];
//     for (let item of numbers) {
//         console.log(item)
//     }
// }
// showArray1();

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// let creator = (text) => {
//     document.write(`<p>${text}</p>`)
// };
// creator('Hello Okten');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let create = (text)=> {
//     document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// create('Hello')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let create2 = (text, size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// };
// create2('Hello Okten', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let buildingList = (arr) => {
//
//     document.write(`<ul>`)
//     for (let item of arr) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// };
// buildingList([2, '17', 13, '6', 22, 31, 45, 6, '100', true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let showArray2 = (array) => {
//     for (let element of array) {
//         document.write(`<div>${element.id} - ${element.name} - ${element.age}</div>`)
//     }
// };
// showArray2([
//     {
//         id: 1,
//         name: 'Vasya',
//         age: 25
//     },
//     {
//         id: 2,
//         name: 'Tolya',
//         age: 30
//     },
//     {
//         id: 3,
//         name: 'Tanya',
//         age: 26
//     }
// ]);

////                                    class work

//Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let minNumber = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// };
// minNumber(3, 2, 5,);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let maxNumber = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     }
// };
// maxNumber(14, 5, 8);

// - створити функцію яка повертає найбільше число з масиву
//
// let maxNumberArray = (arr) => {
//     let max = arr[0];
//     for (let number of arr) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     console.log(max)
//     return max;
// }
// maxNumberArray([2, 17, 130, 6, 22, 31, 45, 6, 100, -18]);

// - створити функцію яка повертає найменьше число з масиву
//
// let minNumberArray = (arr) => {
//         let min = arr[0];
//     for (let number of arr) {
//         if (number < min) {
//             min = number;
//         }
//
//     }
//     console.log(min);
//     return min;
// }
//
// minNumberArray([2, 17, 130, 6, 22, 31, 45, 9, 100, -18]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let sum = (arr) => {
//     let result = 0;
//     for (let num of arr) {
//         result = result + num;
//     }
//     console.log(result);
//     return result;
// }
// sum([2, 17, 130, 6, 22, 31, 45, 9, 100, 18]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let average = (arr) => {
//     let result = 0;
//     for (let num of arr) {
//         result = result + num;
//     }
//     return result / arr.length;
// }
// console.log(average([2, 17, 130, 6, 22, 31, 45, 9, 100, 18]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function minMaxNum(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (let num of arr) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//
//     }
//     return min;
// }
// minMaxNum([2, 17, 130, 6, 22, 31, 45, 9, 100, 18]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// let random = () => {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     console.log(array)
//     return array;
// }
// random();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let randomLimit = (limit, size) => {
//     let array = [];
//     for (let i = 0; i < size; i++) {
//         array[i] = Math.round(Math.random() * limit);
//     }
//     console.log(array);
//     return array;
// }
// randomLimit(50, 10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let reverseArray = (arr) => {
//     let newArray = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArray[i] = arr[i];
//     }
//     console.log(newArray);
//     return newArray;
// };
// reverseArray([2, 17, 130, 6, 22, 31, 45, 9, 100, 18]);

