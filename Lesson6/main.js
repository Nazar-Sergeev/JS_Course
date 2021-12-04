////                                        home         work

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world';
//
// let str2 = 'lorem ipsum';
//
// let str3 = 'javascript is cool';
// console.log(str1.length, str2.length, str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let toUpperCase1 = str1.toUpperCase();
// console.log(toUpperCase1);
//
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
//
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let str1 = 'HELLO WORLD';
//
// let str2 = 'LOREM IPSUM';
//
// let str3 = 'JAVASCRIPT IS COOL';
//
// let toLowerCase = str1.toLowerCase();
// console.log(toLowerCase);
//
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
//
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim);

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//
// function stringToArray(str) {
//     return str.split(' ');
// }
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// console.log(stringToArray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
//
//     let str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     return str.substring(0, length);
//
// }
// console.log(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//   При цьому всі символи рядка необхідно перевести у верхній регістр.
// function insert_dash(str) {
//     return str.split(' ').join('-').toUpperCase();
// }
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// function strUpper(str) {
//    return  str[0].toUpperCase() + str.slice(1);
// }
// let str = "html javascript php";
// console.log(strUpper(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// function capitalize(str){
//     return str.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
//
// }
// let str = "html javascript php";
// console.log(capitalize(str));


/////                                   class   work

//
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
