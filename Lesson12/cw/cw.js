
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         let divWrap = document.createElement('div');
//         divWrap.classList.add('wrap');
//                 for (const post of posts) {
//                     let divPost = document.createElement('div');
//                     divPost.classList.add('post');
//                     divPost.innerHTML = `
//                         <h4>${post.id}</h4>
//                         <h2>${post.title}</h2>
//                         <p>${post.body}</p>
//                         `;
//                     let btn = document.createElement('button');
//                     btn.innerText = 'Show comments';
//                     btn.onclick = (id) => {
//                         fetch('https://jsonplaceholder.typicode.com/comments')
//                             .then(value => value.json())
//                             .then(comments => {
//                                 for (const comment of comments) {
//                                     let divComment = document.createElement('div');
//                                     divComment.classList.add('comment');
//                                     divComment.innerHTML = `
//                                     <h4>${comment.id}</h4>
//                                     <h3>${comment.name}</h3>
//                                     <h5>${comment.email}</h5>
//                                     <p>${comment.body}</p>
//                                     `;
//                                     divPost.appendChild(divComment);
//                                 }
//                                 btn.disabled = true;
//                             });
//                     };
//                         divPost.appendChild(btn);
//                         divWrap.appendChild(divPost);
//                         document.body.appendChild(divWrap);
//                 }
//
//     });