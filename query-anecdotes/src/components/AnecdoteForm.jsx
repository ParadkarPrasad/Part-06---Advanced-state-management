import { createAnecdotes } from "../services/anecdote"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
const AnecdoteForm = () => {
  const queryClient = useQueryClient()
const newMutation = useMutation({mutationFn:createAnecdotes,
  onSuccess: (newAnecdote) => {
    const anecdotes = queryClient.getQueryData(['anecdotes'])
  queryClient.setQueryData(['anecdotes'],anecdotes.concat(newAnecdote))
}})
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    // console.log('new anecdote')
    newMutation.mutate({ content, votes:0 })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
