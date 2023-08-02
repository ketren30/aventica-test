import { post } from "./js/post";
import './style.css';
import { watcher } from "./js/watcher";
import { comments } from "./js/comments";

function App() {
    let state = {
        posts: [],
        loading: true,
        error: ''
    };
    const info = document.getElementById('info');
    const wrapper = document.getElementById('info-wrapper');
    const spinner = document.getElementById('spinner');

    async function getComments(sameTimeAmount) {
        const size = Math.ceil(state.posts.length/sameTimeAmount);
        for (let i=0; i<size; i++) {
            const temp = state.posts.slice(sameTimeAmount*i, sameTimeAmount*i + sameTimeAmount).map((item, ind) => {
                return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${item.id}`)
            });
            await Promise.allSettled(temp)
                .then(results => results.forEach((result)=> {
                    if (result.status==="fulfilled") return result.value.json()
                    .then(res=> comments(res))
                }))
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responce => {
            if (responce.ok) return responce.json()
        })
        .then(result => {
            state.posts = result;
            setTimeout(() => {
                state.loading = false
                getComments(5)
            }, 1500)
        })
        .catch((err) => {
            setTimeout(() => {
                info.innerText = `Что-то пошло не так, ошибка: ${err}. Попробуйте еще раз.`;
                wrapper.removeChild(spinner);
            }, 1500)
        }) 

    watcher(state, () => {
        if (state.loading) info.textContent="Loading...";
        else {
            info.textContent="";
            wrapper.removeChild(spinner);
            state.posts.map(item => post(item))
        }       
    })

}
document.addEventListener('DOMContentLoaded', App())
