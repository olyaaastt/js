// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою


// let square = (a, b) => a * b;
//
// let result = square(10, 5)
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола

// let circle=(a)=> { return Math.PI * a ** 2}
// console.log(circle(2));




// - створити функцію яка обчислює та повертає площу циліндру

// let cylinderArea=(a,b)=> {return s = 2*Math.PI*a*(b+a);}
// console.log(cylinderArea(2, 4));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let massiveOutput=(a)=>{
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
// let mass =[100,200,300,400,500]
// massiveOutput(mass);



// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraph=(txt)=> {
//     document.write(`<p>${txt}</p>`)
// }
//
// paragraph("asdasdasdaf")



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let funForul=(a)=> {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
//
// }
// funForul("item")

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let funForul=(a, n)=> {
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

// let  listForMassive=(a)=>{
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
// let divForObject=(a)=> {
//     for (const aElement of a) {
//         document.write(`<div>   ${aElement.id},   ${aElement.name},  ${aElement.age}</div> `)
//
//     }
// }
//
// divForObject(userMass)