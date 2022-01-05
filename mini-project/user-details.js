
let users = JSON.parse(localStorage.getItem('users'));


for (const user of users) {

    let divUser = document.createElement('h3');
    divUser.innerText = `${user.name} ${user.username} - email: ${user.email}`


    let divInfo = document.createElement('div');
    divInfo.innerText = `phone: ${user.phone} - website: ${user.website}`


    let divAddress = document.createElement('div')

    let address = document.createElement('ul');

    let h3Address = document.createElement('h3');
    h3Address.innerText = 'Address';
    divAddress.append(h3Address, address);


    for (const addressItem in user.address) {
        let infoAddress = user.address[addressItem]
        if (typeof infoAddress === 'object') {
            let liLast = document.createElement('li');
            liLast.innerHTML = `<b>${addressItem}</b>:`;
            address.appendChild(liLast)
            break;
        }

        let elementLi = document.createElement('li');
        elementLi.innerHTML =`<b>${addressItem}</b>: ${infoAddress}`;
        address.appendChild(elementLi)

    }

    let geoUl = document.createElement('ul')

for (const item in user.address.geo) {
    let geoLi = document.createElement('li');
    geoLi.innerText = `${item}: ${user.address.geo[item]}`
    geoUl.appendChild(geoLi)
}

address.appendChild(geoUl);


    let divCompany = document.createElement('div');


    let h3 = document.createElement('h3');
    h3.innerText = 'Company';
    divCompany.appendChild(h3);

    let company = document.createElement('ul');
    divCompany.appendChild(company)

    for (const companyItem in user.company) {
        let companyElement = document.createElement('li');
        companyElement.innerHTML = `<b>${companyItem}</b>: ${user.company[companyItem]}`
        company.appendChild(companyElement);
    }

    document.body.append(divUser, divInfo, divAddress, divCompany);
}

let btn = document.createElement('button');
btn.innerText = 'post of current user';


document.body.appendChild(btn);

