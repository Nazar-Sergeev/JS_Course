
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let div_1 = document.createElement('div');
// div_1.innerText = 'Форма 1';
//
// let div_2 = document.createElement('div');
// div_2.innerText = 'Форма 2';
//
// document.body.appendChild(div_1);
// document.body.appendChild(div_2);
//
// let form_1 = document.createElement('form');
// form_1.setAttribute('name', 'form_1');
// div_1.appendChild(form_1);
//
// let input_1 = document.createElement('input');
// input_1.setAttribute('name', 'input_1');
//
//
// let input_2 = document.createElement('input');
// input_2.setAttribute('name', 'input_2');
//
//
// let form_2 = document.createElement('form');
// form_2.setAttribute('name', 'form_2');
// div_2.appendChild(form_2);
//
// let input_3 = document.createElement('input');
// input_3.setAttribute('name', 'input_3');
//
//
// let input_4 = document.createElement('input');
// input_4.setAttribute('name', 'input_4');
//
// form_1.append(input_1, input_2);
// form_2.append(input_3, input_4);
//
// let btn = document.createElement('button');
// btn.innerText = 'CLICK'
// document.body.appendChild(btn);
//
// btn.addEventListener('click', function () {
//     console.log(document.forms.form_1.input_1.value);
//     console.log(document.forms.form_1.input_2.value);
//     console.log(document.forms.form_2.input_3.value);
//     console.log(document.forms.form_2.input_4.value);
// });

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let input_1 = document.createElement('input');
// input_1.setAttribute('type', 'number')
//
// let input_2 = document.createElement('input');
// input_2.setAttribute('type','number')
//
// let input_3 = document.createElement('input');
//
//
// let btn = document.createElement('button');
// btn.innerText = 'Create Table';
//
// document.body.append(input_1, input_2, input_3, btn);
//
// btn.addEventListener('click', function () {
//     let tr = input_1.value;
//     let td  = input_2.value
//     let text = input_3.value;
//
//     function createTable(tr, td, innerText) {
//         let table = document.createElement('table');
//         table.style.border = '1px solid red';
//         document.body.appendChild(table);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid red'
//                 td.innerText = `${innerText}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//
//             }
//         }
//
//     }
//
//
//     createTable(tr, td, text);
// });

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let array = ['олень', 'козел', 'полупокер', 'дурак', 'муділо'];
//
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'Chek';
// document.body.append(input, btn);
//
// btn.addEventListener('click', function () {
//     let value = input.value;
//     for (const item of array) {
//         if (item === value) {
//             alert('Nu nu nu!!!!');
//             value = '';
//             return;
//         }
//
//
//     }
//     if (value) {
//         alert('That OK!!!')
//     }
//     input.value = '';
// });


