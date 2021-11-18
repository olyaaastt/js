// 1. Створити пустий масив та :

//     a. заповнити його 50 парними числами за допомоги циклу.

let arr = [];

// for (let i = 0; i < 50; i++){
//     if(i%2===0){
//         arr[i]=i
//     }
//
// }
// console.log(arr);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 50; i++){
//     if(i%2===1){
//         arr[i]=i
//     }
//
// }
// console.log(arr);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     arr[i] =Math.floor((Math.random()*(50-2+1))+2);
//
// }
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr[i] =Math.floor((Math.random()*(732-8+1))+8);
//
// }
// console.log(arr);



// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 2; i < 20; i+=3) {
//
//         console.log(arr[i])
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < 20; i+=3) {
// if(i%2===0) {
//     console.log(arr[i])
// }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let a=[];
// for (let i = 2; i < 20; i+=3) {
// if(arr[i]%2===0) {
//    a[i]= arr[i];
// }
// }
// console.log(a);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
         //   0   1 2   3 4  5   6  7   8
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let an=  [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ]
// for (let i = 0; i < 9; i++) {
// if(an[i+1]%2 ===0) {
//     console.log(an[i])
// }
// }


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//

//  let mas =[100,250,50,168,120,345,188];
//  let sum=0;
// for (let i = 0; i < mas.length; i++) {
//     sum+=mas[i];
// }
//
// let mean = sum/mas.length;
// console.log(mean)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let random_massive=[];
// for (let i = 0; i < 10; i++) {
//     random_massive[i] =Math.floor((Math.random()*(10-5+1))+5);
//
// }
// console.log(random_massive);
// let massive =[];
// for (let i = 0; i < random_massive.length; i++) {
//     massive[i]=random_massive[i]*5;
// }
// console.log(massive);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let different_massive=['fghj',23,true,"jek",34,false,100,12];
// let number=[];
// for (let i = 0; i < different_massive.length; i++) {
//     if (typeof different_massive[i] ==="number"){
//         number[i]=different_massive[i];
//     }
//
// }
// console.log(number);
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// for (const users of usersWithId) {
//     for (const cities of citiesWithId) {
//         if(users.id===cities.user_id)
//             users.address= cities;
//
//     }
//
// }
// console.log(usersWithId);
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let mas = [12,9,4,2,3,7,39,107,2003,17,1];
// for (let i = 0; i < mas.length; i++) {
//     if(mas[i]%2===0){
//         console.log(mas[i]);
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let mas = [12,9,4,2,3,7,39,18,2010,17,1];
// let mass=[];
// for (let i = 0; i < mas.length; i++)
// {
//     mass[i]=mas[i];
//
// }
// console.log(mass);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.


// let mas = [ 'a', 'b', 'c'];
// let  word = "";
// for (let i = 0; i < mas.length; i++){
//     word  +=  mas[i];
// }
// console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let  word = "";
// let i = 0
// while(i<mas.length){
//     word  +=  mas[i];
//     i++;
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let mas = [ 'a', 'b', 'c'];
// let  word = "";
// for (const string of mas) {
//
//     word  +=  string;
// }
// console.log(word)
