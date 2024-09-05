import { useSelector, useDispatch } from 'react-redux'
import { updateVote } from '../reducers/anecdoteReducer'

const ListAnecdote = () => {
  const anecdotes = useSelector(state => {
    if(state.filter === null){
      return state.anecdotes.sort((a,b) => b.votes - a.votes)
    }
    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a,b)=> b.votes - a.votes)
  })
  
  const dispatch = useDispatch()

  const vote = (id) => {
    // console.log('vote', id)
    dispatch(updateVote(id))
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default ListAnecdote