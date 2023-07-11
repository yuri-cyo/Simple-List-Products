const store = createStore({
state () {
    return {
    count: 'STOREE'
    }
},
mutations: {
    increment (state) {
    state.count
    }
}
})

const app = createApp({app})

// Install the store instance as a plugin
app.use(store)

