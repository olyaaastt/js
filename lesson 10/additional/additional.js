// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// document.onclick = function (e){
//     console.log('назва тегу: '+ e.target.localName);
//     console.log('список класів: ' + e.target.classList.value);
//     console.log('список ід: ' + e.target.id);
//     console.log('розміри: ' + e.target.clientHeight +'*  '+  e.target.clientWidth );
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e){
//     alert('назва тегу:  '+ e.target.localName + '\nсписок класів: ' + e.target.classList.value +
//         '\nсписок ід: ' + e.target.id + '\nрозміри: ' + e.target.clientHeight +' * '+  e.target.clientWidth  );
//
// }


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//

// let f1 = document.forms.f1;
// f1.onsubmit = function (e) {
//     e.preventDefault();
//
//     let status = this.status.checked;
//
//     if(status) {
//         let falseStatus = usersWithAddress.filter(value => value.status !== status);
//         console.log(falseStatus);
//
//         output(falseStatus);
//     }
//     else {
//         output(usersWithAddress);
//     }
//     document.body.appendChild(document.createElement('hr'));
//
//     let age = this.age.checked;
//     if (age) {
//         let a = usersWithAddress.filter(value => value.age >= 29);
//         console.log(a);
//         output(a);
//
//     } else {
//         output(usersWithAddress);
//
//     }
//
//     document.body.appendChild(document.createElement('hr'));
//
//     let checked = this.address.checked;
//
//
//     if (checked) {
//
//         let address = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//         console.log(address);
//
//         output(address);
//     } else {
//         output(usersWithAddress)
//     }
//
// };
// document.body.appendChild(document.createElement('hr'));
//
// let output = function (arr) {
//
//     for (let user of arr) {
//         let divElement = document.createElement('div');
//         divElement.innerText = `${user.name}  ${user.age}   ${user.status}  ${user.address.city}  ${user.address.street} ${user.address.number} `
//         document.body.appendChild(divElement)
//     }
//
//
// }



//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// function bold() {
//     document.execCommand('bold', false, null);
// }
//
// function italic() {
//     document.execCommand('italic', false, null);
// }
//
//
// function underline() {
//     document.execCommand('underline', false, null);
// }
//
