// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-user-details.html,
// которая имеет детальную информацию про объект на который кликнули
//
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать,
// так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>  response.json())
    .then((users) => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap--user');
        document.body.appendChild(wrap)
        for (let user of users) {

            let UserDiv = document.createElement('div');
            UserDiv.classList.add('user--div')


            UserDiv.innerHTML = `<p> id: ${user.id}</p> <h4>${user.name}</h4> `

            let detailsLink = document.createElement('a');
            detailsLink.innerText = ' details page';
            detailsLink.href = 'user-details.html?id=' + user.id;
            UserDiv.appendChild(detailsLink);
            document.body.appendChild(UserDiv);
            wrap.appendChild(UserDiv);
        }

});