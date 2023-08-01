export const comments = (element) => {
    const postItem = document.getElementById(element[0].postId);
    const comments = document.createElement('div');
    comments.setAttribute('id', 'comments');

    element.forEach((item) => {
        comments.innerHTML+= `<div id="comment"><h3>${item.email}</h3><h4>${item.body}</h4></div>`;
    })
    let currentPost = postItem.innerHTML;
    currentPost+=comments.innerHTML;
    if (postItem) postItem.innerHTML = currentPost;

}