// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

// function User(id,name, surname , email,phone) {
//
//     this.id = id
//     this.name=  name
//     this.surname =  surname
//     this.email=   email
//     this.phone =  phone
// }
// let arrUser=[
//     new User(1,"Andriy","St","asd@gmail.com","380500500005"),
//     new User(10,"Roma","St","qwe@ua.com","380500500015"),
//     new User(5,"Olya","St","dfge@ua.com","380500510015"),
//     new User(2,"Vasya","Koks","dehjk@ua.com","38059905100"),
//     new User(3,"Valya","Koksik","dgehjk@ua.com","38059905100"),
//     new User(4,"Ira","FF","dfgehk@ua.com","38059905100"),
//     new User(7,"Yura","Panda","jk@ua.com","38059925100"),
//     new User(9,"Ruvim","Kubick","kasd@ua.com","38039905100"),
//     new User(8,"Dima","Pes","sdhjk@ua.com","38059945100"),
//     new User(6,"Vova","Vovk","dhjk@ua.com","38059935100"),
// ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter =arrUser.filter((x)=>{
// if(x.id%2===0){
//     console.log(x);
// }
// return x;
// })


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sort = arrUser.sort((a,b)=>a.id-b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

 // class Client {
 //    constructor(id,name,surname,email,phone,order) {
 //        this.id=id;
 //        this.name = name;
 //        this.surname = surname;
 //        this.email = email;
 //        this.phone = phone;
 //        this.order = order;
 //    }
 //
 // }

// створити пустий масив, наповнити його 10 об'єктами Client

//  let arrClient = [
//      new Client(2,"Vasya","Koks","dehjk@ua.com","38059905100",["apple","laptop"]),
//     new Client(1,"Andriy","St","asd@gmail.com","380500500005",["smartphone","laptop","banana"]),
//     new Client(10,"Roma","St","qwe@ua.com","380500500015",["book"]),
//     new Client(5,"Olya","St","dfge@ua.com","380500510015",["clothes","cucumber"]),
//     new Client(3,"Valya","Koksik","dgehjk@ua.com","38059905100",["apple","laptop"]),
//     new Client(4,"Ira","FF","dfgehk@ua.com","38059905100",["sweets"]),
//     new Client(7,"Yura","Panda","jk@ua.com","38059925100",["apple","laptop"]),
//     new Client(9,"Ruvim","Kubick","kasd@ua.com","38039905100",["smartphone","laptop","banana"]),
//     new Client(8,"Dima","Pes","sdhjk@ua.com","38059945100",["clothes","cucumber","laptop","banana"]),
//     new Client(6,"Vova","Vovk","dhjk@ua.com","38059935100",["book"])
//
//
// ];




// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = arrClient.sort((a,b)=>a.order.length-b.order.length);
// console.log(sort);