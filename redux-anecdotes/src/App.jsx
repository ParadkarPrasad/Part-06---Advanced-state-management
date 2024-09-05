import ListAnecdote from "./components/ListAnecdote"
import AnecdoteForm from "./components/AnecdoteForm"
import Filter from "./components/Filter"
const App = () => {
 

  return (
<div>
    <h2>Anecdotes</h2>
    <Filter/>
    <ListAnecdote/>
  <AnecdoteForm/>
    </div>
  )
}

export default App