// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min(a,b,c){
//     if (a<b && a<c) {
//         console.log(a)
//
//     }else if (b<c && b<a )
//     {
//         console.log(b)
//     }
//     else
//     {
//         console.log(c)
//     }
//
// }
// let res = min(10,11,20)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a)
//
//     } else if (b > c && b > a) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
//
// }
//
// let res = max(100, 101, 20)


// - створити функцію яка повертає найбільше число з масиву


// function massivemax(a) {
//     let max=a[0];
//     for (let i = 0; i < a.length; i++) {
//        if(a[i]>max) {
//            max = a[i]
//        }
//     }
//     return max;
// }
// let arr = [1,20,3,4,5]
// let res= massivemax(arr)
// console.log(res)


// - створити функцію яка повертає найменьше число з масиву

// function massivemin(a) {
//     let min=a[0];
//     for (let i = 0; i < a.length; i++) {
//        if(a[i]<min) {
//            min = a[i]
//        }
//     }
//     return min;
// }
// let arr = [1,20,3,4,5]
// let res= massivemin(arr)
// console.log(res)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function massiveSum(a) {
//     let sum=0;
//     for (let i = 0; i < a.length; i++) {
//        sum+=a[i]
//     }
//     return sum;
// }
// let arr = [1,20,30,40,5]
// let res= massiveSum(arr)
// console.log(res)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function massiveSum(a) {
//     let sum=0;
//     for (let i = 0; i < a.length; i++) {
//        sum+=a[i]
//     }
//     let sd = sum/a.length
//     return sd;
// }
// let arr = [1,20,30,40,5]
// let res= massiveSum(arr)
// console.log(res)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function fun(arg) {
//     let minimal = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//
//         if (element < minimal) {
//             minimal = element
//         }
//         if (element > max) {
//             max = element
//         }
//
//     }
//
//     console.log(max);
//     return minimal
// }
//
//
// let result = fun(100,56,79,9);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function roundRandom(a) {
//     arr=[];
//     for (let i = 0; i < a; i++) {
//         arr[i] = Math.round(Math.random()*100)
//
//     }
//     console.log(arr)
//   return arr;
// }
// let result = roundRandom(10);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.



// function limitRandom(a, limit) {
//     arr = [];
//     for (let i = 0; i < a; i++) {
//         arr[i] = Math.round(Math.random() * limit)
//
//     }
//     console.log(arr)
//     return arr;
// }
//
// let result = limitRandom(10, 20);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverseMass(mass) {
// let arr = [];
//
//     for ( let i =mass.length-1; i>=0; i--) {
//         const arrEl= mass[i];
//         arr.push(arrEl);
//
//     }
//
// return arr;
// }
// let a =[1,2,3];
// let result = reverseMass(a);
// console.log(result)
