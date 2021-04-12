import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import bookReducer from '../reducers/bookReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        books : bookReducer
    }), applyMiddleware(thunk))

    return store
}

export default configStore