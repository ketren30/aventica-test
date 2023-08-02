export const comments = (element) => {
    const postItem = document.getElementById(element[0].postId);
    const commentsWrapper = document.createElement('div');
    commentsWrapper.setAttribute('class', 'comments-wrapper');

    element.forEach((item) => {
        commentsWrapper.innerHTML+= `<div class="comment">
            <h3 class='comment-name'>${item.name}</h3>
            <h3 class='comment-email'>${item.email}</h3>
            <h4 class='comment-body'>${item.body}</h4>
        </div>`;
    })

    postItem.insertAdjacentElement("beforeend", commentsWrapper)
}