// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function square(a, b) {
//     let s = a * b
//     return s;
// }
//
// let result = square(10, 5)
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(a) {
//     let s = Math.PI * a ** 2
//     return s;
// }
//
// let squareOfcircle = circle(2);
// console.log(squareOfcircle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//S= 2πr(r+h)
//
// function cylinderArea(a,b) {
//     let s = 2*Math.PI*a*(b+a);
//     return s;
//
// }
// let result = cylinderArea(2,4);
// console.log(` площa циліндрa = ${result}`)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function massiveOutput(a){
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
// let mass =[100,200,300,400,500]
// massiveOutput(mass);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(txt) {
//     document.write(`<p>${txt}</p>`)
// }
//
// paragraph("asdasdasdaf")
// paragraph("gugudugugau")
// paragraph("dfghjkl")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function funForul(a) {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//
//
//     document.write(`</ul>`)

// }
// funForul("item")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function funForul(a, n) {
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
//
// funForul("item", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function listForMassive(a){
// document.write(`<ol>`)
// for (let i = 0; i < arr.length; i++) {
//
//
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// arr=[12,'banana',true,1000,'apple',false];
// listForMassive(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let userMass = [
//     {id: 1,
//         name: 'Andriy',
//         age: 22},
//     {id: 2,
//         name: 'Olya',
//         age: 18},
//     {
//     id: 3,
//     name: 'Roma',
//     age: 14
// },
//     {id: 4,
//         name: 'Stas',
//         age: 6},
//     {id: 5,
//         name: 'Vanya',
//         age: 10}
// ];
//
// function divForObject(a) {
//     for (const aElement of a) {
//         document.write(`<div> ID - ${aElement.id},  name -  ${aElement.name}, age - ${aElement.age}</div> `)
//
//     }
//
//
// }
//
// divForObject(userMass)