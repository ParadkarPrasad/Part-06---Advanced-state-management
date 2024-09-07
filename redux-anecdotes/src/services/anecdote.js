import axios from 'axios'
const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async ()=>{
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content)=>{
  const newAnecdote = { content, votes:0 }
  const res = await axios.post(baseUrl, newAnecdote)
  return res.data
}

const updateAnecdoteVotes =  async (anecdote) =>{
  console.log(anecdote)
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1}
    // console.log(anecdote)
    const res = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote)
    console.log(res.data)
    return res.data
}
export default {getAll, createNew, updateAnecdoteVotes}