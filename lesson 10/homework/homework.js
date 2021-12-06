// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// let div = document.createElement('div');
// div.id = 'text';
// div.innerText='Click here'
// document.body.appendChild(div)
//
//
// div.onclick = function () {
//     div.style.display = "none";
//     console.log("text is  hidden")
// }


//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText ="Click here";
// document.body.appendChild(button);
// button.onclick = function (){
//     button.style.display = 'none';
//     console.log("button was clicked");
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// let btn = document.getElementById('btn');
//
// btn.onclick = function (){
//     let age = document.getElementById('age');
//     if (!age.value){
//         alert('enter age')
//     }
//
//     else if(age.value >=18) {
//         alert('hello')
//     }
//     else if(age.value && age.value<18){
//         alert('sorry, but you can not see this information')
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

//
// let element = document.querySelector('.menu');
// let button = element.querySelector('.btn');
//
// button.onclick = function () {
//     element.classList.toggle('hidden');
// };

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title: 'The Fixies', body: 'good cartoon'},
//     {title: 'Cake', body: 'it is tasty'},
//     {title: 'Weather', body: 'Cold'},
// ];
//
// for (let comment of comments) {
//     let div = document.createElement('div');
//     let btn = document.createElement('button');
//     btn.innerText = 'collapse';
//
//     let title =document.createElement('h4');
//     let body =document.createElement('p');
//     title.innerText = comment.title;
//     body.innerText = comment.body
//     document.body.appendChild(div);
//     div.append(title,body,btn);
//
//     btn.onclick =  ()=>{
//         btn.previousElementSibling.classList.add('hiddenBody')
//     }
//
//
// }