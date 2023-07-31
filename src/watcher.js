export const watcher = (state, func) => {

    let target = null;    
    class Dep {
        constructor () {
            this.subscribers = []
        }
        depend () {
            if (target && !this.subscribers.includes(target)){
                this.subscribers.push(target)
            }
        }
        notify () {
            this.subscribers.forEach(sub => sub())
        }
    }
    Object.keys(state).forEach(key => {
        let internalValue = state[key]
        const dep = new Dep()

        Object.defineProperty(state, key, {
            get() {
                dep.depend()
                return internalValue
            },
            set(newVal) {
                internalValue = newVal
                dep.notify()
            }
        })
    })
    function watcher(myFunc){
        target = myFunc
        target()
        target = null
    }
    watcher(func)
}