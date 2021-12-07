
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let btn = document.getElementById('btn');
//
// let text = document.getElementById('text');
//
// btn.onclick = function () {
//     text.style.display = 'none';
// };

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.getElementById('btn');
//
// btn.onclick = function () {
//     this.style.display = 'none';
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.
// let form = document.forms.check;
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     if (this.userAge.value < 18) {
//         console.log('Noooo!!!');
//     }
// };

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.getElementsByClassName('menu')[0];
// menu.onclick = function () {
//     for (const child of this.children) {
//         child.classList.toggle('roll')
//     }
// };

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
//
// for (const comment of comments) {
//
//     let div = document.createElement('div');
//
//     let title = document.createElement('h1');
//     title.innerText = comment.title
//
//     let body = document.createElement('div');
//     body.innerText = comment.body;
//
//     let btn = document.createElement('button');
//     btn.innerText = 'DELETE';
//
//     btn.onclick = function () {
//         body.classList.toggle('delete-body');
//     };
//
//     div.append(title, body, btn);
//     document.body.appendChild(div);
// }

