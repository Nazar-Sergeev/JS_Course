
//                                              HOME       WORK

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers)
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// let strings = ['a', 'b', 'c', 'd', 'e'];
// console.log(strings)
// console.log(strings[0]);
// console.log(strings[1]);
// console.log(strings[2]);
// console.log(strings[3]);
// console.log(strings[4]);
// let mix = [1., 3, 'asd', 'qwe', true, false];
// console.log(mix)
// console.log(mix[0]);
// console.log(mix[1]);
// console.log(mix[2]);
// console.log(mix[3]);
// console.log(mix[4]);
// console.log(mix[5]);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let array = [];
// array[0] = 100;
// array[1] = '100';
// array[2] = '100';
// array[3] = 100;
// array[4] = '100';
// console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`)
//     document.write('Hello Okten!!!');
//     document.write(`</div>`)
//
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`)
//     document.write('index' + i);
//     document.write(`</div>`)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hello Okten!!!</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`'asdasdas' ${i}`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     console.log(num)
//
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arrayStrings = ['hello', 'okten', 'how', 'are', 'you', 'doing', '???'];
// for (let arrayString of arrayStrings) {
//     console.log(arrayString);
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arrayMix = [1, 3, 78, 52, 14, 'hello', 'world', true, false];
//
// let i = 0;
// while (i < arrayMix.length) {
//     console.log(arrayMix[i]);
//     i++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mix = [1, 2, 3, 'sas', true, false, 78, true, false, 65];
// for (let i = 0; i < mix.length; i++) {
//     let item = mix[i];
//     if (typeof item === 'boolean') {
//         console.log(item)
//     }
//
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mix = [1, 2, 3, 'sas', true, false, 78, true, false, 65];
// for (let i = 0; i < mix.length; i++) {
//     let item = mix[i];
//     if (typeof item === 'number') {
//         console.log(item);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mix = [1, 2, 3, 'sas', true, 'qwe', false, 78, true, 'asdas', false, 65];
//
// for (let i = 0; i < mix.length; i++) {
//     let item = mix[i];
//     if (typeof item === 'string') {
//         console.log(item);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 100;
// array[1] = 'hello';
// array[2] = 'okten';
// array[3] = 500;
// array[4] = 'school';
// array[5] = true;
// array[6] = false;
//
// for (let item of array) {
//     console.log(item);
// }
//
// for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     console.log(item);
// }
//
// let i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i += 3) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }



//                                                  CLASS       WORK

// зробити масив з 10 чисел [2,17,13,6,22,31,45,6,100,-18]та:
//
// let numbers = [2, 17, 13, 6, 22, 31, 45, 6, 100, -18];

//     1. перебрати його циклом while
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
//
// }
// let i = numbers.length - 1;
// while (i >= 0) {
//     console.log(numbers[i])
//     i--;
// }

//     2. перебрати його циклом for
// for (let num of numbers) {
//     console.log(num);
// }
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i])
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// let i = 0;
// while (i < numbers.length) {
//     if (i % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let num of numbers) {
//     if (num % 3 === 0) {
//         console.log(num)
//     }
// }
// for (let i = 0; i < numbers.length; i++) {
//     let item = numbers[i];
//     if (item % 3 === 0) {
//         console.log(item);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// let i = 0;
// while (i < numbers.length) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let number of numbers) {
//     if (number % 3 === 0) {
//         number = 'okten';
//     }
// }

// 8. вивести масив в зворотньому порядку.
// for (let i = numbers.length - 1; i >= 0; i--) {
//     let number = numbers[i];
//     console.log(number)
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// Завдання зроблено, воно в рішеннях 1 та 2 завдання.