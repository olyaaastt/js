// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let first_str = 'hello world';
// console.log(first_str.length);
//
//
// let second_str = 'lorem ipsum';
// console.log(second_str.length);
//
//
// let third_str = 'javascript is cool';
// console.log(third_str.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let first_str = 'hello world';
// console.log(first_str.toUpperCase());
//
// let second_str = 'lorem ipsum';
// let toUpperCase = second_str.toUpperCase()
// console.log(toUpperCase);
//
//
// let third_str = 'javascript is cool';
// let toUpper = third_str.toUpperCase();
// console.log(toUpper);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let first_str = 'HELLO WORLD';
// console.log(first_str.toLowerCase());
//
// let second_str = 'LOREM IPSUM';
// let toLowerCase = second_str.toLowerCase();
// console.log(toLowerCase);
//
//
// let third_str = 'JAVASCRIPT IS COOL';
// let toLower = third_str.toLowerCase();
// console.log(toLower);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray=(array)=> array.split(' ')
// let str = 'Каждый охотник желает знать';
//  let arr = stringToarray(str);
//  document.writeln(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let delete_characters=(str,end)=>{
//      return str.substr(0, end)
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash=(str)=>{
//    return str.replaceAll(" "," - ").toUpperCase();
// }
// let str = "HTML JavaScript PHP";
//  document.writeln(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//

// let toUpperFirstChar=(str)=>{
//      return str[0].toUpperCase() + str.slice(1);
// }
// let string = 'your string'
// document.writeln(toUpperFirstChar(string));



// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

//
// let capitalize=(str)=>{
//     return  str.split(' ').map(s=>s.charAt(0).toUpperCase()+s.slice(1))
// }
// let a='one two three four five';
// document.writeln(capitalize(a));