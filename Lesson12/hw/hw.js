//
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(response => {
//             let div = document.createElement('div');
//             div.classList.add('wrap');
//         for (const post of response) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('post');
//             divPost.innerHTML = `<h3>${post.id}</h3> <h2>${post.title}</h2> <p>${post.body}</p>`
//
//             div.appendChild(divPost);
//             document.body.appendChild(div);
//         }
//     });


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(response => {
//         let div = document.createElement('div');
//             div.classList.add('wrap');
//         for (const comment of response) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comment');
//             divComment.innerHTML = `<h3>${comment.id}</h3> <h2>${comment.name}</h2> <h4>${comment.email}</h4> <p>${comment.body}</p>`
//
//             div.appendChild(divComment)
//             document.body.appendChild(div);
//         }
//
//     });