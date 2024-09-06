import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
// import anecdoteService from './services/anecdote'
// import  {appendAnecdote, setAnecdotes} from './reducers/anecdoteReducer'
// import filterReducer from './reducers/filterReducer'
import store from './store'
// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })
// const store = createStore(reducer)

// anecdoteService.getAll().then(anecdote => store.dispatch(setAnecdotes(anecdote)))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)