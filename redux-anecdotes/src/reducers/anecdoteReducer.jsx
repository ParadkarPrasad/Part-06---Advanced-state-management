import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdote"
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateVote(state, action){
      const id = action.payload
      // console.log(id)
     return state.map(anecdote => anecdote.id === id? {...anecdote, votes: anecdote.votes + 1}: anecdote)
     .sort((a,b)=> b.votes - a.votes)
    },

    // addAnecdote(state, action){
    //   state.push(action.payload)
    // },

    appendAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})


export const {updateVote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = ()=>{
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

// Create using Thunk

export const addAnecdote = (content) =>{
  return async dispatch =>{
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export default anecdoteSlice.reducer