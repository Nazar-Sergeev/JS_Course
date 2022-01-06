

let posts = JSON.parse(localStorage.getItem('posts'));

    let postWrap = document.createElement('div');
for (const post of posts) {
    let divPost = document.createElement('div');
    divPost.innerHTML = `
    <h3>User Id: ${post.userId}</h3>
    <p>Post Id: ${post.id}</p>
    <h3>${post.title}</h3> 
    <p>${post.body}</p> 
    `
    postWrap.appendChild(divPost);
    
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(response => {
    console.log(response)
    });

}


document.body.appendChild(postWrap);