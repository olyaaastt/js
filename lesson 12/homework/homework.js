// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// // Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts




// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) =>  response.json())
//     .then((posts) => {
//         let divElement = document.createElement('div');
//         divElement.classList.add('post');
//         document.body.appendChild(divElement);
//         for (let post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('postWrap')
//             let userId = document.createElement('p');
//             let id = document.createElement('p');
//             let title = document.createElement('h4');
//             let body = document.createElement('p');
//
//             userId.innerText = `userId: ${post.userId}`;
//             id.innerText = ` id: ${post.id}`;
//             title.innerText = `${post.title}`;
//             body.innerText = `${post.body}`;
//
//             divElement.appendChild(divPost);
//             divPost.append(userId,id,title,body)
//
//         }
//     });




// //     2.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// //     Для кожного елементу свій блок div.comment
// // Всі характеристики повинні мати свої блоки всередені div.comment
// // https://jsonplaceholder.typicode.com/comments



// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((response) => response.json())
//     .then((comments) => {
//
//
//         for (const comment of comments) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comment');
//
//
//             divComment.innerHTML = `
//
//                     <p> postId: ${comment.postId}</p>
//                     <p> id: ${comment.id}</p>
//                     <h2>${comment.name}</h2> <p>${comment.email}</p>
//                     <i>${comment.body}</i>
//                     <hr>`;
//
//             document.body.appendChild(divComment);
//         }
//
//     });