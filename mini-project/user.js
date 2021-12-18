
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
            let divWrapper = document.createElement('div');
        for (let user of users) {
            // console.log(user)
            let divUser = document.createElement('div');

            let h2 = document.createElement('h2');
            h2.innerText = `${user.id} - ${user.name}`

            let btn = document.createElement('button');
            // btn.setAttribute('href', 'user-details.html')
            btn.innerText = 'user-details';

            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json())
                    .then(response => {
                        for (const item of response) {
                            if (user.id === item.id) {
                                let h1 = document.createElement('h2');
                                h1.innerText = `${item.username} - ${item.email}`
                                divUser.appendChild(h1)
                            }
                        }
                    });

            }


            divUser.append(h2, btn)
            divWrapper.appendChild(divUser);
        }
        document.body.appendChild(divWrapper)
    });