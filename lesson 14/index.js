//  HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі



//
// function wakeUp() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//                 console.log('eeeeee  wake up');
//                 resolve('wake up')
//
//         }, 500)
//     })
// }
// function eat() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//                 console.log('you have a breakfast');
//                 resolve('eat')
//
//         }, 1000)
//     })
// }
// function study() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//
//                 console.log('do homework');
//                 resolve('study')
//
//         }, 2500)
//     })
// }
// function dinner() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//                 console.log('eeeaaaat');
//                 resolve('dinner')
//
//         }, 2000)
//     })
// }
// function walk() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//                 console.log('walk with friends');
//                 resolve('walk')
//
//         }, 700)
//     })
// }
// function watchFilm() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//            console.log('go to the cinema');
//                 resolve('film')
//
//         }, 2500)
//     })
// }
// function timeForTea() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//                 console.log('drink tea');
//                 resolve('tea')
//
//         }, 1000)
//     })
// }
// function supper() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//                 console.log('supper');
//                 resolve('food')
//
//         }, 200)
//     })
// }
// function reading() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//
//                 console.log('read book');
//                 resolve('reading')
//
//         }, 1000)
//     })
// }
// function sleep() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//
//
//                 console.log('go sleeping');
//                 resolve('sleep')
//
//         }, 600)
//     })
// }
//


 // //promise


// wakeUp()
//     .then(result=>{
//     return eat()
// }) .then(result=>{
//     return study()
// }).then(result=>{
//     return dinner()
// }).then(result=>{
//     return walk()
// }).then(result=>{
//     return watchFilm()
// }).then(result=>{
//     return timeForTea()
// }).then(result=>{
//     return supper()
// }).then(result=>{
//     return reading()
// }).then(result=>{
//     return sleep()
// })


 // // async

// async function day() {
//     // try {
//         await wakeUp();//1
//         await eat();
//         await study();
//         await dinner();
//         await walk();
//         await timeForTea();
//         await watchFilm();
//         await supper();
//         await reading();//9
//         await sleep();
//
//     // } catch (e) {
//     //     console.error(e)
//     // }
// }
// day()



// // callback

// function wakeUp(callback) {
//
//         setTimeout(() => {
//               callback()
//             console.log('eeeeee  wake up');
//         }, 500)
//
// }
// function eat(callback) {
//
//         setTimeout(() => {
//
//             callback();
//             console.log('you have a breakfast');
//
//         }, 1000)
//
// }
// function study(callback) {
//
//         setTimeout(() => {
//
//          callback();
//             console.log('do homework');
//
//         }, 2500)
//
// }
// function dinner(callback) {
//
//         setTimeout(() => {
//             callback();
//             console.log('eeeaaaat');
//         }, 2000)
//
// }
// function walk(callback) {
//
//         setTimeout(() => {
//             callback();
//             console.log('walk with friends');
//         }, 700)
//
// }
// function watchFilm(callback) {
//
//         setTimeout(() => {
//             callback();
//             console.log('go to the cinema');
//
//         }, 2500)
//
// }
// function timeForTea(callback) {
//
//         setTimeout(() => {
//            callback();
//             console.log('drink tea');
//
//         }, 1000)
//
// }
// function supper(callback) {
//
//         setTimeout(() => {
//
//             callback();
//             console.log('supper');
//
//         }, 200)
//
// }
// function reading(callback) {
//
//         setTimeout(() => {
//
//             callback();
//             console.log('read book');
//
//         }, 1000)
//
// }
// function sleep() {
//
//         setTimeout(() => {
//
//             console.log('go sleeping');
//
//         }, 600)
//
// }
//
//
// wakeUp(()=>{
//     eat(()=>{
//         study(()=>{
//             dinner(()=>{
//                 walk(()=>{
//                     watchFilm(()=>{
//                         timeForTea(()=>{
//                             supper(()=>{
//                                 reading(()=>{
//                                     sleep()
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })