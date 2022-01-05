
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let divWrapper = document.createElement('div');

        localStorage.setItem('users', JSON.stringify([]));

        for (const user of users) {
            let divUser = document.createElement('div');
//
            let h2 = document.createElement('h2');
            h2.innerText = `${user.id} - ${user.name}`

            let btn = document.createElement('a');
            btn.setAttribute('href', 'user-details.html')
            btn.innerText = 'user-details';

            btn.onclick = () => {
                let users = JSON.parse(localStorage.getItem('users'));
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                btn.disabled = true;
            };

            divUser.append(h2, btn)
            divWrapper.appendChild(divUser);
        }
                document.body.appendChild(divWrapper)
    });