// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let five_number = [1,2,3,4,5];
// console.log(five_number);
//
//
// let five_word = [' word one',' word two',' word three', ' word four' ,' word five'];
// console.log(five_word);
//
//
// let other_five = [false, 100,'one',true, 'two'];
// console.log(other_five);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr =[];
// arr[0]=1;
// arr[1]=false;
// arr[2]='array';
// console.log(arr)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i=0; i<10; i++){
//     document.write('<div>block</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for(let i=0; i<10; i++){
//     document.write(`<div>block ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
// while (i<20)
// {
//     document.write('<h1>block</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=0;
// while (i<20)
// {
//     document.write(`<h1>block ${i}</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr_num = [0,10,20,30,40,50,60,70,80,90];
// for (let i=0; i<arr_num.length; i++){
//     console.log(arr_num[i]);
//
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr_str =['banana','kiwi','strawberry','pineapple','apple','apricot','avocado','blackberry','cherry','coconut'];
// for (let i = 0; i < arr_str.length; i++) {
//     console.log(arr_str[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr_bool = [true, 100, true, false,'kiwi', false,200, false,'number', false ]
// for (let i = 0; i < arr_bool.length; i++) {
//     console.log(arr_bool[i]);
//
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array =[100,'one' ,'banana',true, 26,false,'apple',200,true,1];
// for (let i = 0; i < array.length; i++) {
//  if(typeof array[i]==="boolean"){
//      console.log(array[i]);
//  }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array =[100,'one' ,'banana',true, 26,false,'apple',200,true,1];
// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i]==="number"){
//         console.log(array[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array =[100,'one' ,'banana',true, 26,false,'apple',200,true,1];
// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i]==="string"){
//         console.log(array[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'hello';
// arr[1] = 'world';
// arr[2] = 1234;
// arr[3] = false;
// arr[4] = 55;
// arr[5] = "sun";
// arr[6] = 'cloud';
// arr[7] = true;
// arr[8] = 1;
// arr[9] = false;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
//     document.write(`<h2>${i}</h2>`);
//
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(`${i}`);
//     document.write(`<div>${i}</div>`);
//
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// let arr=[];
// let x=0;
// for (let i = 0; i < 100; i++) {
//     if(i%2===0) {
//         console.log(arr[i]);
//         document.write(`<div>${i}</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if(i%2!==0) {
//         console.log(`${i}`);
//         document.write(`<div>${i}</div>`);
//     }
// }