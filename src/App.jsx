 import React, { useState } from 'react'
 import axios from 'axios';
 
 function App() {

  const [movie,setMovie] = useState([])
  const [movieName,setMovieName] = useState('')

  function handlesubmit(){
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}api_key=ea85630803e293cff396198c4410a67b`)
    .then((res)=>{
      setMovie(res.data.results[0])
      console.log(res.data.results)
    })
  }

  return (
    <div>
        <form action={handlesubmit}>
          <input type="text" placeholder='Search Movie' value={movieName} onChange={e=> setMovieName (e.target.value)}/>
          <button type='submit'>Search</button>
        </form>

     </div>
   )
 }
 
 export default App