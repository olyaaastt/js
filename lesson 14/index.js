//  HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі




// function wakeUp(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//             if(done) {
//                 console.log('eeeeee  wake up');
//                 resolve('wake up')
//             }
//             else{
//                 reject('error')
//             }
//
//         }, 500)
//     })
// }
// function eat(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//             if(done) {
//                 console.log('you have a breakfast');
//                 resolve('eat')
//             }
//             else{
//                 reject('error')
//             }
//
//         }, 1000)
//     })
// }
// function study(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//
//             if (done) {
//                 console.log('do homework');
//                 resolve('study')
//             }
//             else{
//                 reject('error')
//             }
//
//         }, 2500)
//     })
// }
// function dinner(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//             if (done) {
//                 console.log('eeeaaaat');
//                 resolve('dinner')
//             }else{
//                 reject('error')
//             }
//
//
//         }, 2000)
//     })
// }
// function walk(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//             if (done) {
//                 console.log('walk with friends');
//                 resolve('walk')
//             }else{
//                 reject('error')
//             }
//
//         }, 700)
//     })
// }
// function watchFilm(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(done) {
//                 console.log('go to the cinema');
//                 resolve('film')
//             }else{
//                 reject('error')
//             }
//
//         }, 2500)
//     })
// }
// function timeForTea(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//             if (done) {
//                 console.log('drink tea');
//                 resolve('tea')
//             }else{
//                 reject('error')
//             }
//
//
//         }, 1000)
//     })
// }
// function supper(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//             if(done) {
//                 console.log('supper');
//                 resolve('food')
//             }else{
//                 reject('error')
//             }
//
//         }, 200)
//     })
// }
// function reading(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//          if(done) {
//              console.log('read book');
//              resolve('reading')
//          }else{
//              reject('error')
//          }
//         }, 1000)
//     })
// }
// function sleep(done) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//
//             if (done) {
//
//                 console.log('go sleeping');
//                 resolve('sleep')
//             }else{
//                 reject('error')
//             }
//         }, 600)
//     })
// }



 // //promise

// try{
// wakeUp(true)
//     .then(result=>{
//     return eat(true)
// }) .then(result=>{
//     return study(true)
// }).then(result=>{
//     return dinner(true)
// }).then(result=>{
//     return walk(true)
// }).then(result=>{
//     return watchFilm(true)
// }).then(result=>{
//     return timeForTea(true)
// }).then(result=>{
//     return supper(true)
// }).then(result=>{
//     return reading(true)
// }).then(result=>{
//     return sleep(true)
// })
// }
// catch(e){
//     console.error(e)
// }


 // // async

// async function day() {
//     try {
//         await wakeUp(true);
//         await eat(true);
//         await study(true);
//         await dinner(true);
//         await walk(true);
//         await timeForTea(true);
//         await watchFilm(true);
//         await supper(true);
//         await reading(true);
//         await sleep(true);
//
//     } catch (e) {
//         console.error(e)
//     }
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