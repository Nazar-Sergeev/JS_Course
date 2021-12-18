//Зробити свій розпорядок дня.
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с



function wakeUp(wokeUp) {
        return new Promise((resolve, reject) => {
    setTimeout(() => {
            if (wokeUp) {
                resolve('Good Morning');
            }
            reject('Go sleep');
        }, 300);
    });
}


function breakfast(food) {
        return new Promise((resolve, reject) => {
    setTimeout(() => {
            if (food) {
                resolve(`Drink ${food}`)
            }
            reject('No eat');
        }, 1000);

    });
}

function goShower(shower) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shower) {
            resolve('Yuhu hu hu cool shower')
        }
        reject('Foooo');
    }, 500);

    });
}

function goWork(isJobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isJobDone) {
                resolve('$$$$')
            }
            reject('000 money (((')
        }, 3000);
    });
}

function dinner(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (food) {
            resolve( `Nyam nyam ${food}`)
        }
        reject('(((((')


        }, 1000);
    });
}

function goHome(home) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (home) {
            resolve('Hooray i`m home')
        }
        reject('still working')
            
        }, 100);
    });
}



wakeUp(true)
    .then(morning => {
        console.log(morning);
    
    return breakfast('coffe')
    })
    .then(eat =>{
        console.log(eat);
    return goShower(true)
    })
    .then(yeas => {
         console.log(yeas);

    return goWork(true)
    })
    .then(completed =>{
        console.log(completed);

    return dinner('steak and potatoes')
    })
    .then(eat =>{
       console.log(eat)

    return goHome(true);
    })

    .then(myHouse =>{
        console.log(myHouse)
    })



