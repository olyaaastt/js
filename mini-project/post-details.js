// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост,вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.


let url = new URL(location.href);
let idOfPost = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/posts/' + idOfPost)
    .then(response => response.json())
    .then(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post--div')
        postDiv.innerHTML = `  <h6>userId:  ${post.userId}</h6> <p> id: ${post.id}</p>  <h4>title: ${post.title}</h4> <i> body: ${post.body}</i> `
        document.body.appendChild(postDiv)

        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
            .then(response => response.json())
            .then(comments => {


                let  commentWrap = document.createElement('div');
                commentWrap.classList.add('comment--wrap');
                for (let comment of comments) {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment--div');
                    commentDiv.innerHTML = `
                      <h6> postId: ${comment.postId}</h6>
                    <p>id: ${comment.id}</p>
                     <h3> ${comment.name}</h3>
                    <i> email: ${comment.email}</i>
                    <p>${comment.body}<p>`

                    document.body.appendChild(commentWrap)
                    commentWrap.appendChild(commentDiv);

                }
            })

    });

