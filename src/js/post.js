export const post = (elem) => {

    const wrapper = document.getElementById('posts-wrapper');
    wrapper.innerHTML+= `<section id=${elem.id} class="post-item">
        <h3 class="post-title">${elem.title}</h3>
        <h4 class="post-body">${elem.body}</h4>
    </section>`

}
