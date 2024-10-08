import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import { setNotificationTimer } from "../reducers/notificationReducer";
// import anecdoteService from "../services/anecdote";
const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addNote = async(event)=>{
    event.preventDefault()
    const content = event.target.anecdote.value;
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
    dispatch(setNotificationTimer(`you added anecdote: '${content}'`, 10));
  }
  return (
    <div>
    <h2>create new</h2>
      <form onSubmit={addNote}>
        <div><input name="anecdote" /></div>
        <button type='submit'>create</button>
      </form>
      </div>
  )
}

export default AnecdoteForm