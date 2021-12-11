//-створити форму з інпутами для name та age.
//При відправці форми записати об'єкт в localstorage
// let form = document.createElement('form');
//
// let name = document.createElement('input');
// name.setAttribute('name', 'name');
//
// let age = document.createElement('input');
// age.setAttribute('name', 'age');
// age.setAttribute('type', 'number');
//
// let btn = document.createElement('button');
// btn.innerText = 'Enter';
//
// form.append(name, age, btn);
// document.body.appendChild(form);
//
//
// let save = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     }
//     localStorage.setItem('key', JSON.stringify(user));
// };
//
// btn.addEventListener('click', function () {
//     save(name.value, age.value);
// });


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// let form = document.createElement('form');
//
// let model = document.createElement('input');
// model.setAttribute('name', 'model');
//
// let type = document.createElement('input');
// type.setAttribute('name', 'type');
//
// let volume = document.createElement('input');
// volume.setAttribute('name', 'volume');
//
// let btn = document.createElement('button');
// btn.innerText = 'Enter';
//
// form.append(model, type, volume, btn);
// document.body.appendChild(form);
//
// let saveCar = (modelCar, typeCar, volumeCar) => {
//     let cars = JSON.parse(localStorage.getItem('key')) || [];
//     cars.push(modelCar, typeCar, volumeCar);
//     localStorage.setItem('key', JSON.stringify(cars));
// };
//
// btn.onclick = () =>{
//     saveCar(model.value, type.value, volume.value)
// }

