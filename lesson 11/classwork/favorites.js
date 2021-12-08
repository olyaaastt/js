const users = JSON.parse(localStorage.getItem('key'));
for (let user of users) {

    let div = document.createElement('div');
    div.innerText =` name : ${user.name}, age:  ${user.age}, status: ${user.status}`;

    document.body.appendChild(div);

}