import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdoteVote } from './services/anecdote'
import { useNotificationDispatch } from './NotificationContext'

const App = () => {
  
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()
  const updateAnecdoteMutation = useMutation({
  mutationFn : updateAnecdoteVote,
  onSuccess : () =>{
    queryClient.invalidateQueries({queryKey:['anecdotes']})
  }
})
  const { isLoading, isError, data} = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false,
    refetchOnWindowFocus: false
  })
 
  const handleVote =  async (anecdote) => {
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes+1 })
    await dispatch({
      type: 'SHOW',
      payload: `You have voted for the following anecdote: ${anecdote.content}`
    });
    setTimeout(()=>{
      dispatch({type: 'HIDE'})
    },5000)
  }


  if(isLoading) {
    return <div>loading...</div>

  }

  if(isError) {
    return <div>anecdote service not available due to problems in server</div>;
  }
  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {data.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
