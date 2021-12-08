// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє
// до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


const users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
localStorage.setItem('key', JSON.stringify([]));
for (let user of users) {

    let divElement  = document.createElement('div');
    divElement.className = 'user';
    divElement.innerText =` name :   ${user.name}
       age: ${user.age} 
       status: ${user.status}   `
    document.body.appendChild(divElement);

    let btn = document.createElement('button');
    btn.innerText = 'add to favorites'
    btn.style.background = '#39E24D'
    btn.style.borderRadius = '10px'
    btn.style.border = ' 3px solid #008110';
    btn.style.marginBottom ='5px';

    divElement.appendChild(btn)


    btn.onclick = () => {
        const fav = JSON.parse(localStorage.getItem('key'));
        fav.push(user);
        localStorage.setItem('key', JSON.stringify(fav));
        btn.disabled = true;
    }

}
