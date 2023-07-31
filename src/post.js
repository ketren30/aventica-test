export const post = (elem) => {
    
    const postItem = document.createElement('section');
    postItem.setAttribute('id', 'post-item');

    const title = document.createElement('h1');
    title.innerText = elem.title;
    title.setAttribute('id', 'post-title');

    const body = document.createElement('h1');
    body.innerText = elem.body;
    body.setAttribute('id', 'post-body');

    postItem.appendChild(title);
    postItem.appendChild(body);

    const wrapper = document.getElementById('posts-wrapper');
    wrapper.appendChild(postItem)
}
