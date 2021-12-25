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



// function wakeUp(wokeUp) {
//         return new Promise((resolve, reject) => {
//     setTimeout(() => {
//             if (wokeUp) {
//                 resolve('Good Morning');
//             }
//             reject('Go sleep');
//         }, 300);
//     });
// }
//
//
// function breakfast(food) {
//         return new Promise((resolve, reject) => {
//     setTimeout(() => {
//             if (food) {
//                 resolve(`Drink ${food}`)
//             }
//             reject('No eat');
//         }, 1000);
//
//     });
// }
//
// function goShower(shower) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (shower) {
//             resolve('Yuhu hu hu cool shower')
//         }
//         reject('Foooo');
//     }, 500);
//
//     });
// }
//
// function goWork(isJobDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isJobDone) {
//                 resolve('$$$$')
//             }
//             reject('000 money (((')
//         }, 3000);
//     });
// }
//
// function dinner(food) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (food) {
//             resolve( `Nyam nyam ${food}`)
//         }
//         reject('(((((')
//
//
//         }, 1000);
//     });
// }
//
// function goHome(home) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (home) {
//             resolve('Hooray i`m home')
//         }
//         reject('still working')
//
//         }, 100);
//     });
// }


// wakeUp(true)
//     .then(morning => {
//         console.log(morning);
//
//     return breakfast('coffe')
//     })
//     .then(eat =>{
//         console.log(eat);
//     return goShower(true)
//     })
//     .then(yeas => {
//          console.log(yeas);
//
//     return goWork(true)
//     })
//     .then(completed =>{
//         console.log(completed);
//
//     return dinner('steak and potatoes')
//     })
//     .then(eat =>{
//        console.log(eat)
//
//     return goHome(true);
//     })
//
//     .then(myHouse =>{
//         console.log(myHouse)
//     })


// async function schedule() {
//     console.log(await wakeUp(true));
//     console.log(await breakfast('tea'));
//     console.log(await goShower(true));
//     console.log(await goWork(true));
//     console.log(await dinner('Grechka'));
//     console.log(await goHome(true));
// }
//
// schedule();


//
// function wakeUp(wokeUp, cb) {
//         setTimeout(() => {
//             if (wokeUp) {
//                 cb(null, 'Good Morning');
//             } else {
//             cb('Go sleep');
//             }
//         }, 300);
// }
//
//
// function breakfast(food, cb) {
//         setTimeout(() => {
//             if (food) {
//                 cb(null, `Drink ${food}`);
//             } else {
//                 cb('No eat');
//             }
//         }, 1000);
//
// }
//
// function goShower(shower, cb) {
//         setTimeout(() => {
//             if (shower) {
//                 cb(null, 'Yuhu hu hu cool shower');
//             } else {
//                 cb('Foooo');
//             }
//         }, 500);
// }
//
// function goWork(isJobDone, cb) {
//         setTimeout(() => {
//             if (isJobDone) {
//                 cb(null, '$$$$');
//             } else {
//                 cb('000 money (((');
//             }
//         }, 3000);
// }
//
// function dinner(food, cb) {
//         setTimeout(() => {
//             if (food) {
//                 cb(null, `Nyam nyam ${food}`);
//             } else {
//                 cb('(((((');
//             }
//
//         }, 1000);
// }
//
// function goHome(home, cb) {
//         setTimeout(() => {
//             if (home) {
//                 cb(null, 'Hooray i`m home');
//             } else {
//                 cb('still working');
//             }
//
//         }, 100);
// }
//
// wakeUp(true, (err, morning) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(morning);
//
//     breakfast('tea', (err, eat) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//     console.log(eat)
//
//         goShower(true, (err, yeas) => {
//         if (err) {
//             console.log(err);
//             return
//         }
//         console.log(yeas)
//
//             goWork(true, (err, completedWork) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log(completedWork);
//
//                 dinner('potato', (err, eat) => {
//                     if (err) {
//                         console.log(err);
//                         return;
//                     }
//                     console.log(eat);
//
//                     goHome(true, (err, home) => {
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }
//                         console.log(home);
//                     });
//                 });
//             });
//         });
//     });
// });
