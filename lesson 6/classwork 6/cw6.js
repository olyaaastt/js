// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let validName=(str, smbl)=>{
//     let arr=[];
//     if(str.includes(smbl)){
//         let spliteSmbl=str.split(smbl);
//         spliteSmbl.forEach((item) => {if (item) arr.push(item);})
//         console.log(arr.join(' '))
//     }
//
// }
//
// validName(n1,'.')
// validName(n2,'-')
// validName(n3,'_')

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomNum  =(length)=>{
//     let arr=[];
//     for (let i = 0; i < length; i++) {
//         let a= Math.floor(Math.random()*100);
//         arr.push(a);
//     }
// return arr;
// }
// let randMas= randomNum(10)
// console.log(randMas);
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// console.log(randMas.sort((one, two) => one - two));



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// console.log(randMas.filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = randMas.map(value => {return value +'';})
// console.log(array);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//

// let sortNums=(arr,direction)=>{
//     if(direction==="ascending"){
//        return  arr.sort((a,b)=>a-b);
//     }
//     if(direction==="descending"){
//       return   arr.sort((a,b)=>b-a);
//     }
// }
// let nums = [11,21,3];
// console.log(sortNums(nums, "ascending"));
//

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((c1,c2)=>{return c2.monthDuration-c1.monthDuration})
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(value => {return  value.monthDuration>5});
// console.log(filter);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString=(str,n)=>{
//     let arr=[];
//     while (str.length) {
//
//         arr.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     console.log(arr);
//     return arr;
//
// }
// cutString('наслаждение',3)