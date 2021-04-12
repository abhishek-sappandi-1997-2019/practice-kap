import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configStore from './store/configStore'

const store = configStore()

console.log("initial state", store.getState());

store.subscribe(()=>{
    console.log("subscribe state", store.getState());
})

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('root'))