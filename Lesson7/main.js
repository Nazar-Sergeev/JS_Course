
////                            home            work


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(1, 'Harry', 'Potter', 'potter@gmail.com', 'iphone'),
//     new User(2, 'Harry', 'Potter', 'potter@gmail.com', 'iphone'),
//     new User(3, 'Harry', 'Potter', 'potter@gmail.com', 'iphone'),
//     new User(4, 'Harry', 'Potter', 'potter@gmail.com', 'iphone'),
//     new User(5, 'Ron', 'Whisley', 'whisley@gmail.com', 'iphone'),
//     new User(6, 'Ron', 'Whisley', 'whisley@gmail.com', 'iphone'),
//     new User(7, 'Ron', 'Whisley', 'whisley@gmail.com', 'iphone'),
//     new User(8, 'Hermione', 'Granger', 'granger@gmail.com', 'iphone'),
//     new User(9, 'Hermione', 'Granger', 'granger@gmail.com', 'iphone'),
//     new User(10, 'Hermione', 'Granger', 'granger@gmail.com', 'iphone')
//
// ];
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filter = users.filter((user) => {
//     return user.id % 2 === 0;
// });
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sortUp = users.sort((a, b) => {
//     return a.id - b.id;
// });
// console.log(sortUp);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(1, 'Harry', 'Potter', 'potter@gmail.com', 'iphone', ['beer', 'butter', 'bread']),
//     new Client(2, 'Harry', 'Potter', 'potter@gmail.com', 'iphone', ['beer', 'juse', 'butter', 'bread']),
//     new Client(3, 'Harry', 'Potter', 'potter@gmail.com', 'iphone', ['butter', 'bread']),
//     new Client(4, 'Harry', 'Potter', 'potter@gmail.com', 'iphone', ['beer', 'juse', 'butter', 'bread']),
//     new Client(5, 'Ron', 'Whisley', 'whisley@gmail.com', 'iphone', ['beer', 'juse', 'butter', 'bread']),
//     new Client(6, 'Ron', 'Whisley', 'whisley@gmail.com', 'iphone', ['beer', 'butter', 'bread']),
//     new Client(7, 'Ron', 'Whisley', 'whisley@gmail.com', 'iphone', ['beer', 'bread']),
//     new Client(8, 'Hermione', 'Granger', 'granger@gmail.com', 'iphone', ['juse', 'butter', 'bread']),
//     new Client(9, 'Hermione', 'Granger', 'granger@gmail.com', 'iphone', ['beer', 'juse', 'butter','salt','bread']),
//     new Client(10, 'Hermione', 'Granger', 'granger@gmail.com', 'iphone', ['beer', 'juse', 'butter', 'bread'])
// ]
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortUpClients = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sortUpClients);

/////                           class           work


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, made, year, maxspeed, engine) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = () => console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     this.info = () =>  console.log(`${this.model} ${this.made} ${this.year} ${this.maxspeed} ${this.engine}`);
//     this.increaseMaxSpeed = (newSpeed) => {
//         let a = this.maxspeed + newSpeed;
//         console.log(`Тепер їдемо зі швидкістю ${a}км на годину`);
//     };
//     this.changeYear = (newValue) => {
//         this.year = newValue;
//         console.log(`${this.year} new years!!!`)
//     };
//     this.addDriver = (driver) => {
//        this.driver = driver;
//
//     };
// }
//
// let car = new Car('Toyota', 'Japan', 2012, 240, 3.5);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2021);
// car.addDriver({
//     name: 'Vasya',
//     age: 30,
//     status: true
// })

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, made, year, maxspeed, engine) {
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//         this.drive = () => console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//         this.info = () => console.log(`${this.model} ${this.made} ${this.year} ${this.maxspeed} ${this.engine}`);
//         this.increaseMaxSpeed = (newSpeed) => {
//             let a = this.maxspeed + newSpeed;
//             console.log(`Тепер їдемо зі швидкістю ${a}км на годину`);
//         };
//         this.changeYear = (newValue) => {
//             this.year = newValue;
//             console.log(`${this.year} new years!!!`)
//         };
//         this.addDriver = (driver) => {
//             this.driver = driver;
//
//         };
//     }
// }
//
// let car = new Car('Toyota', 'Japan', 2012, 240, 3.5);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2021);
// car.addDriver({
//     name: 'Vasya',
//     age: 30,
//     status: true
// })


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function Cinderella(name, age, footSize) {
//
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//
// }
//
// let cinderellas = [
//     new Cinderella('Tanya', 25, 34),
//     new Cinderella('Sveta', 26, 42),
//     new Cinderella('Katya', 28, 41),
//     new Cinderella('Ivanka', 23, 40),
//     new Cinderella('Ulyana', 26, 39),
//     new Cinderella('Oksana', 30, 38),
//     new Cinderella('Natalya', 29, 37),
//     new Cinderella('Elena', 21, 33),
//     new Cinderella('Olya', 19, 35),
//     new Cinderella('Vika', 35, 36)
//
// ];
// class Prince {
//
//     constructor(name, age, findShoes) {
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes;
//     }
// }
//
// let prince =  new Prince('Kolya', 25, 35);
//
// function find (cinderellas, prince){
//     for (let item of cinderellas) {
//         if (item.footSize === prince.findShoes)
//             return `${item.name}`;
//     }
//
// }
//
// console.log(find(cinderellas, prince));


