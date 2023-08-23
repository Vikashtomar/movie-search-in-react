 import axios from 'axios'
import React, { useState } from 'react'

 
 function App() {
  const[movie,setMovie] = useState("")
  const [moviename,setMoviename] = useState([])


  function handlesubmit(e){
    e.preventDefault()

    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}api_key=ea85630803e293cff396198c4410a67b`)

    .then((res)=>
    {
      setMovie(res.data.results)
      console.log(res.data.results[0])
    })
  }
   return (
     <div>

      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Search Movie'  />
        <button type='submit'>Search</button>
        <button>add</button>
      </form>

     </div>
   )
 }
 
 export default App