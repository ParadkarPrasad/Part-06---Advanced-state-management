import ListAnecdote from "./components/ListAnecdote"
import AnecdoteForm from "./components/AnecdoteForm"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
const App = () => {
 

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