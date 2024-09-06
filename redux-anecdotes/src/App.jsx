import ListAnecdote from "./components/ListAnecdote"
import AnecdoteForm from "./components/AnecdoteForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"

import {useEffect} from "react"
import anecdoteService from "./services/anecdote"
import { setAnecdotes } from "./reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
const App = () => {
 const dispatch = useDispatch()
 useEffect(()=>{
  anecdoteService.getAll().then(anecdote => dispatch(setAnecdotes(anecdote)))
 })

  return (
<div>
    <h2>Anecdotes</h2>
    <Notification />
    <Filter/>
    <ListAnecdote/>
  <AnecdoteForm/>
    </div>
  )
}

export default App