// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement= document.createElement('div');
// divElement.innerText="asfhfu";
//
//
// divElement.classList.add('wrap','collapse','alpha','beta')
//
// divElement.style.background = 'lightskyblue';
// divElement.style.fontSize = '20px';
// divElement.style.color = 'firebrick';
//
//
// document.body.appendChild(divElement);
//
// let cloneElement= divElement.cloneNode(true);
// document.body.appendChild(cloneElement);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


//
// let menuElement=['Main','Products','About us','Contacts'];
// let menu = document.getElementsByClassName('menu')[0]
// for (let item of menuElement) {
//     let li = document.createElement('li')
//     li.innerText=item;
//   menu.appendChild(li)
// }


// - Є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (let course of coursesAndDurationArray) {
//     let divElement= document.createElement('div');
//     divElement.innerText=course.title + ' ' + course.monthDuration;
//     document.body.appendChild(divElement);
// }


// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.



// for (const course of coursesAndDurationArray) {
//     let divElement= document.createElement('div');
//     divElement.classList.add('item')
//
//     document.body.appendChild(divElement)
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${course.title}`
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${course.monthDuration}`
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//
// }





