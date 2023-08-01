import { post } from "./js/post";
import './style.css';
import { watcher } from "./js/watcher";
import { comments } from "./js/comments";

function App() {
    let state = {
        posts: [],
        loading: true
    };
    const loadingElement = document.getElementById('loading');

    async function getComments() {
        const sameTimeAmount = 5;
        const size = Math.ceil(state.posts.length/sameTimeAmount);
        for (let i=0; i<size; i++) {
            const temp = state.posts.slice(sameTimeAmount*i, sameTimeAmount*i + sameTimeAmount).map((item) => {
                return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${item.id}`)
            });
            await Promise.allSettled(temp)
                .then(results => results.forEach(result=> result.value.json().then(res=> comments(res))))
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(result => {
            state.posts = result;
            setTimeout(() => {
                state.loading = false;
                getComments()
            }, 1500)


    }) 

    watcher(state, () => {
        if (state.loading) loadingElement.textContent="Loading...";
        else {
            loadingElement.textContent="";
            state.posts.map(item => post(item))
        }         
    })

}
document.addEventListener('DOMContentLoaded', App())
