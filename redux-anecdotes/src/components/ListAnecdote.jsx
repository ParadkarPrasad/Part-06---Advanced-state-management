import { useSelector, useDispatch } from 'react-redux'
import { updateVotes } from '../reducers/anecdoteReducer'
import { setNotificationTimer } from '../reducers/notificationReducer'
const ListAnecdote = () => {
  const anecdotes = useSelector(state => {
    // console.log(anecdotes)
    if(state.filter === null){
      return state.anecdotes.sort((a,b) => b.votes - a.votes)
    }
    // return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)).sort((a,b)=> b.votes - a.votes)
    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())).sort((a,b)=> b.votes - a.votes)
  })
  // console.log(anecdotes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    // console.log('vote', id)
    dispatch(updateVotes(anecdote))
    dispatch(setNotificationTimer(`You voted for ${anecdote.content}`,10))
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
            <button onClick={() => vote(anecdote) }>vote</button>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default ListAnecdote