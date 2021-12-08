// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

//
//  let firstForm = document.createElement('form');
// firstForm.setAttribute('name','firstForm');
//
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name','inputOne');
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name','input2');
//
//
// let secondForm = document.createElement('form');
// secondForm.setAttribute('name','secondForm')
//
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name','input3');
//
// let inputFour = document.createElement('input');
// inputFour.setAttribute('name','input4');
//
// let btn = document.createElement('button');
// btn.innerText = 'click here';
// btn.style.background = 'red';
// btn.style.color = 'white';
// btn.style.marginLeft = '134px'
// btn.style.marginTop = '10px'
//
// document.body.appendChild(firstForm);
// document.body.appendChild(secondForm);
// document.body.appendChild(btn);
//
// firstForm.append(inputOne,inputTwo);
// secondForm.append(inputThree,inputFour);
//
//
// btn.onclick = function (){
//     console.log(document.forms.firstForm.inputOne.value);
//     console.log(document.forms.firstForm.input2.value);
//     console.log(document.forms.secondForm.input3.value);
//     console.log(document.forms.secondForm.input4.value);
// }
//

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//

// let div = document.createElement('div');
// let countRow = document.createElement('input');
// let countCol = document.createElement('input');
// let text = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Create table';
//
// document.body.appendChild(div);
// div.append(countRow, countCol, text, button);
//
// button.onclick = function () {
//
//     let row = countRow.value;
//     let col = countCol.value;
//     let txt = text.value;
//
//     let table = document.createElement("table");
//     document.body.appendChild(table);
//
//     for (let i = 0; i < row; i++) {
//
//         let tr = document.createElement('tr');
//
//
//         for (let j = 0; j < col; j++) {
//
//             let td = document.createElement('td');
//             td.style.border = '2px solid violet';
//             td.innerText = `${txt}`;
//             table.appendChild(tr);
//             tr.appendChild(td);
//
//         }
//     }
//
// }
//

// - Сворити масив не цензцурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

// let arr = ['kozlyk', 'blyat', 'mudak'];
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'click here';
// btn.style.background = 'blue';
// btn.style.color = 'white';
// btn.style.border = ' 2px solid blue';
// document.body.append(input, btn);
//
// btn.onclick = function () {
//
//     for (let a of arr) {
//
//         if (a === input.value) {
//             alert(`${a} я тебе знайду `);
//             input.value = ' ';
//             return;
//         }
//
//     }
//     if (input.value) {
//         alert('ok')
//         input.value = ' ';
//     }
// }
//

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let arr = ['kozlyk', 'blyat', 'mudak'];
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'click here';
// btn.style.background = 'blue';
// btn.style.color = 'white';
// btn.style.border = ' 2px solid blue';
// document.body.append(input, btn);
//
// btn.onclick = function () {
//
//     for (let a of arr) {
//
//         if (input.value.includes(a)) {
//             alert(`${a} я тебе знайду `);
//             input.value = ' ';
//             return;
//         }
//
//     }
//     if (input.value) {
//         alert('ok')
//         input.value = ' ';
//     }
// }








