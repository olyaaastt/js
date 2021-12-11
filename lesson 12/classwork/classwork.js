// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// // https://jsonplaceholder.typicode.com/posts
// //     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста



// let block = document.createElement('div');
// block.classList.add('comments--of--posts')
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => {
//
//         let divElement = document.createElement('div');
//         divElement.classList.add('post');
//         document.body.appendChild(divElement);
//         for (let post of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('postWrap')
//             let userId = document.createElement('h6');
//             let id = document.createElement('h5');
//             let title = document.createElement('h4');
//             let body = document.createElement('p');
//
//             userId.innerText = `userId: ${post.userId}`;
//             id.innerText = ` id: ${post.id}`;
//             title.innerText = `${post.title}`;
//             body.innerText = `${post.body}`;
//
//
//             let btn = document.createElement('button');
//             btn.innerText = 'open comments';
//             divElement.appendChild(divPost);
//             divPost.append(userId, id, title, body, btn)
//             btn.onclick = function () {
//                 fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
//                     .then(response => response.json())
//                     .then(comments => {
//                         for (const comment of comments) {
//
//                             if (post.id === comment.postId) {
//                                 let divComments = document.createElement('div');
//                                 divComments.classList.add('comment')
//
//                                 divComments.innerHTML = `
//                                         <h6>postId: ${comment.postId}</h6>
//                                         <h6>id: ${comment.id}</h6>
//                                         <h4> ${comment.name}</h4>
//                                         <h6>email: ${comment.email}</h6>
//                                         <p><i> ${comment.body}</i></p>`;
//                                 divPost.appendChild(block)
//                                 block.appendChild(divComments)
//                             }
//                             btn.disabled = true;
//                         }
//                     })
//             }
//         }
//     })
