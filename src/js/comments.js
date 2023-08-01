export const comments = (element) => {
    const postItem = document.getElementById(element[0].postId);
    postItem.innerHTML+=`<div class="comment">
        <h3>${element[0].email}</h3>
        <h3>${element[0].name}</h3>
        <h4>${element[0].body}</h4>
    </div>`
    const commentsWrapper = document.createElement('div');
    commentsWrapper.setAttribute('class', 'comments-wrapper');

    element.forEach((item) => {
        commentsWrapper.innerHTML+= `<div class="comment">
            <h3>${item.email}</h3>
            <h3>${item.name}</h3>
            <h4>${item.body}</h4>
        </div>`;
    })

    postItem.insertAdjacentElement("beforeend", commentsWrapper)
}