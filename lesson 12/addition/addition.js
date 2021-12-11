// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// // https://jsonplaceholder.typicode.com/users
// //     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// //     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста




// let blockPost = document.createElement('div');
// blockPost.classList.add('block--post');
// let blockComment = document.createElement('div');
// blockComment.classList.add('block--comment');
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (let user of users) {
//             let divElement = document.createElement('div');
//             document.body.appendChild(divElement)
//
//             let id = document.createElement('h4');
//             id.innerText = user.id;
//             divElement.appendChild(id)
//
//             let name = document.createElement('h2');
//             name.innerText = user.name;
//             divElement.appendChild(name);
//
//             let username = document.createElement('h2');
//             username.innerText = user.username;
//             divElement.appendChild(username);
//
//             let email = document.createElement('p');
//             email.innerText = user.email;
//             divElement.appendChild(email);
//
//
//             let phone = document.createElement('div');
//             phone.innerText = user.phone;
//
//
//             let website = document.createElement('div');
//             website.innerText = user.website;
//
//             let address = document.createElement('div');
//
//
//             for (const item in user.address) {
//
//                 if (item !== "geo") {
//                     let div = document.createElement("div");
//                     div.innerText = user.address[item];
//                     address.appendChild(div)
//
//                 } else {
//                     for (const item in user.address.geo) {
//                         const div = document.createElement("div");
//                         div.innerText = user.address.geo[item];
//                         address.appendChild(div)
//                     }
//                 }
//
//             }
//
//
//             divElement.appendChild(address);
//             divElement.appendChild(phone);
//             divElement.appendChild(website);
//             let company = document.createElement('div');
//             for (const item in user.company) {
//                 const temp = document.createElement("div");
//                 temp.innerText = user.company[item];
//                 company.appendChild(temp);
//             }
//
//             divElement.appendChild(company);
//
//
//             let btn = document.createElement('button');
//             btn.innerText = 'posts';
//             divElement.appendChild(btn);
//
//
//             btn.onclick = function () {
//
//                 fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
//                     .then(response => response.json())
//                     .then(posts => {
//                         for (let post of posts) {
//                             let divPost = document.createElement('div');
//                             if (user.id === post.userId) {
//
//                                 divPost.classList.add('post');
//                                 divPost.innerHTML = `
//                                    <h6> userId: ${post.userId}</h6>
//                                    <h5>id: ${post.id}</h5>
//                                    <h4>${post.title}</h4>
//                                    <p>${post.body}</p>
//                                    `;
//                                 divElement.appendChild(blockPost);
//                                 blockPost.appendChild(divPost);
//
//
//                             }
//                             btn.disabled = true;
//
//                             let buttonComment = document.createElement('button');
//                             buttonComment.innerText = 'Comment';
//                             divPost.appendChild(buttonComment)
//
//                             buttonComment.onclick = function () {
//
//
//                                 fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
//                                     .then(response => response.json())
//                                     .then(comments => {
//                                         for (const comment of comments) {
//
//                                             if (post.id === comment.postId) {
//                                                 let divComment = document.createElement('div');
//                                                 divComment.classList.add('comment');
//                                                 divComment.innerHTML = `
//                                         <h6>postId: ${comment.postId}</h6>
//                                         <h3>id: ${comment.id}</h3>
//                                         <h4>${comment.name}</h4>
//                                         <h5> ${comment.email}</h5>
//                                         <p>${comment.body}</p>
//                                         `;
//                                                 divPost.appendChild(blockComment);
//                                                 blockComment.appendChild(divComment)
//                                             }
//                                             buttonComment.disabled = true;
//                                         }
//                                     })
//
//
//                             }
//
//                         }
//
//
//                     })
//             }
//
//         }
//
//     })