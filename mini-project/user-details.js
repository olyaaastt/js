
    // На странице user-user-details.html:
    // 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
    // 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
    // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    // 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-user-details.html,
    // которая имеет детальную информацию про текущий пост.

    // user-user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
    //     блоки с краткой информацией про post - в ряд по 5 объектов.

    let url = new URL(location.href);
    let idOfUser = url.searchParams.get('id');
    fetch('https://jsonplaceholder.typicode.com/users/' + idOfUser)
    .then(value => value.json())
    .then(value => {

    let div = document.createElement('div');
    document.body.appendChild(div)
    div.innerHTML = ` <p>  id : ${value.id}</p>
             <h4>${value.name}</h4>
             <h4>username: ${value.username}</h4>
             <i>email: ${value.email}</i>
             <ul> address:
               <li>street: ${value.address.street}</li>
               <li>suite: ${value.address.suite}</li>
               <li>city: ${value.address.city}</li>
               <li>zipcode: ${value.address.zipcode}</li>
                   <ul> geo:
                      <li>lat: ${value.address.geo.lat}</li>
                      <li>lng: ${value.address.geo.lng}</li>
                   </ul>


             </ul>
             <p>phone: ${value.phone}</p>
             <p>website: ${value.website}</p>
             <ul> company:
                <li> name: ${value.company.name}</li>
                <li>catchPhrase: ${value.company.catchPhrase}</li>
                <li> bs:  ${value.company.bs}</li>
             </ul>

              `


    let btn = document.createElement('button');
    btn.innerText = 'Post of current user';
    let wrapBtn = document.createElement('div');
    wrapBtn.classList.add('wrap--btn');
    wrapBtn.appendChild(btn)
    div.appendChild(wrapBtn);

    btn.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/users/' + value.id + '/posts')
    .then(response => response.json())
    .then(posts => {
    let titleWrap = document.createElement('div');
    titleWrap.classList.add('title--wrap')

    for (let post of posts) {
    let titleDiv = document.createElement('div')
    titleDiv.classList.add('title--div')
    titleDiv.innerHTML = `<p>${post.title}</p>`;

    let detailsLink = document.createElement('a');
    detailsLink.innerText = ' post-details page';
    detailsLink.href = 'post-details.html?id=' + post.id;
    titleDiv.appendChild(detailsLink);


    div.appendChild(titleWrap)
    titleWrap.appendChild(titleDiv)

    btn.disabled = true
}
})


}

});
