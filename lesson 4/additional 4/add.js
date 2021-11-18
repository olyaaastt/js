// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function fun(arg) {
//     let sum = 0;
//     if (arguments.length <= 2) {
//         for (let i = 0; i < arguments.length; i++) {
//
//
//             if (arguments.length === 1) {
//                 console.log(arguments[0])
//             }
//             if (arguments.length === 2) {
//                 sum += arguments[i]
//
//             }
//
//         }
//         if (arguments.length === 2) {
//             console.log(sum)
//         }
//     }
//
//
// else
// {
//     console.log('many arguments')
// }
// }
// let result = fun(100);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
//     [3,5,7,9]


// function massiveArr(a,b) {
//     let arr=[];
//     let sum;
//     for (let i=0;i<a.length;i++){
//         sum=a[i]+b[i];
//         arr.push(sum);
//     }
//      return arr;
// }
// let masOne=[1,2,3,4]
// let masTwo=[2,3,4,5]
// let result = massiveArr(masOne,masTwo);
// console.log(result);
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//


// let mas = [{name: 'Dima', age: 13}, {model:'Camry'}];
// funKey(mas);
// function funKey(mas) {
//
//
//     let arr = [];
//     for (const m of mas) {
//         for (const mKey in m) {
//             arr.push(mKey)
//         }
//     }
//     console.log(arr);
// return arr;
// }





//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let mas = [{name: 'Dima', age: 13}, {model:'Camry'}];
// funObj(mas);
// function funObj(mas) {
//
//
//     let arr = [];
//     for (const m of mas) {
//         for (const mKey in m) {
//             arr.push(m[mKey])
//         }
//     }
//     console.log(arr);
// return arr;
// }
