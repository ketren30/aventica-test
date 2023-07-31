import { post } from "./post";
import './style.css';
import { watcher } from "./watcher";

function App() {
    let state = {
        posts: [],
        loading: true
    };

const loadingElement = document.getElementById('loading');


watcher(state, () => {
        if (state.loading) loadingElement.textContent="Loading...";
        else {
            loadingElement.textContent="";
            state.posts.map(item => post(item))
        } 
})

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(result => {
        state.posts = result;
        setTimeout(() => {
            state.loading = false
        }, 1500)
    })
    
    
    
}
document.addEventListener('DOMContentLoaded', App())
