import axios from 'axios'
const baseUrl = "http://localhost:3001/anecdotes"


// Get Anecdotes
 export const getAnecdotes = () => axios.get(baseUrl).then(res => res.data);

 // Create Anecdotes
export const createAnecdotes = (anecdote) => axios.post(baseUrl, anecdote).then(res => res.data)

// Update votes
export const updateAnecdoteVote = (updatedAnecdote) => axios.put(`${baseUrl}/${updatedAnecdote.id}`,updatedAnecdote).then(res => res.data)