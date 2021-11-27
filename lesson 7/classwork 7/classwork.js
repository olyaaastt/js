// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість,об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//

//  function Car (model,producer, year,maxSpeed, volume){
//     this.model=model;
//     this.producer=producer;
//     this.year= year;
//     this.maxSpeed= maxSpeed;
//     this.volume = volume;
//
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function (){
//         for (const keys in this) {
//             if (typeof this[keys] !== 'function')
//                 console.log(`${keys} ------ ${this[keys]}`)
//         }
//     }
//
//      this.increaseMaxSpeed = function (newSpeed){
//          this.maxSpeed+=newSpeed;
//          console.log(`нова швидкість - ${this.maxSpeed}`)
//      }
//
//      this.changeYear = function (newValue){
//          this.year = newValue;
//          console.log(`новий рік випуску - ${this.year}`)
//
//      }
//
//      this.addDriver= function (driver){
//          this.addDriver=driver;
//
//
//      }
// }
//
//
// let car = new Car("BMW M8","Germany",2021,305,4395);
// console.log(car);
// console.log(" ");
// car.drive();
// console.log(" ");
// car.info();
// console.log(" ");
// car.increaseMaxSpeed(100);
// console.log(" ");
// car.changeYear(2022)
// console.log(" ");
// console.log(car);
// console.log(" ");


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


// class Car {
//     constructor(model,produce,year,maxSpeed,volume) {
//         this.model = model;
//         this.produce = produce;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//
//
//     }
//
//     drive (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//      info(){
//         for (const keys in this) {
//
//             console.log(`${keys} ------ ${this[keys]}`)
//         }
//     }
//
//
//      increaseMaxSpeed  (newSpeed){
//          this.maxSpeed+=newSpeed;
//          console.log(`нова швидкість - ${this.maxSpeed}`)
//      }
//
//       changeYear  (newValue){
//          this.year = newValue;
//          console.log(`новий рік випуску - ${this.year}`)
//
//      }
//
//      addDriver (driver){
//          this.driver=driver;
//      }
// }
// let car = new Car("BMW M8","Germany",2021,305,4395);
// console.log(car);
// console.log(" ");
// car.drive();
// console.log(" ");
// car.info();
// console.log(" ");
// car.increaseMaxSpeed(100);
// console.log(" ");
// car.changeYear(2022)
// console.log(" ");
//
// car.addDriver('gh')
// console.log(" ");
//
//
// console.log(car);
// console.log(" ");



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize=footSize
//     }
// }
// let arrPop =[
//     new Cinderella('Galya',20,40),
//     new Cinderella('Valya',22,39),
//     new Cinderella('Julia',19,36),
//     new Cinderella('Natalia',23,37),
//     new Cinderella('Daria',25,35),
//     new Cinderella('Olena',18,34),
//     new Cinderella('Maria',30,41),
//     new Cinderella('Margarita',25,42),
//     new Cinderella('Anastasia',17,26),
//     new Cinderella('Inga',28,43),
// ]
// console.log(arrPop);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince{
//     constructor(nameP,ageP,shoe) {
//         this.nameP=nameP;
//         this.ageP=ageP;
//         this.shoe=shoe;
//     }
//
// }
// let prince = new Prince("Vasya",30,40)
// console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let findCouple=(arrPop,prince)=> {
//     for (const popelyuska of arrPop) {
//         if (popelyuska.footSize === prince.shoe) {
//             return popelyuska.name;
//         }
//
//     }
// }
// console.log(findCouple(arrPop, prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let x=arrPop.find((popelyuska=>popelyuska.footSize===prince.shoe));
// console.log(x);