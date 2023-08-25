 import axios from 'axios'
import React, { useState } from 'react'
 
 function App() {
  const [movieName,setMovieName] = useState('');
  const [movie,setMovie] = useState([]);
let imgpath = "https://image.tmdb.org/t/p/original"
  function handleSubmit(e)
  {
    e.preventDefault()
    axios.get("https://api.themoviedb.org/3/search/movie?query="+ movieName +"&api_key=ea85630803e293cff396198c4410a67b")
    .then((res)=>{
      setMovie(res.data.results)
      console.log(res.data.results)
      
    })
  }

  // handleSubmit()
  return (
     <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search Movie Name'  value={movieName}  onChange={(e)=> setMovieName(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>

      {movie.map((val,ind)=>{
        return(
          <>
        <img src={imgpath + movie[0].poster_path } alt="hi" />
        <h1>{val.title}</h1>

          </>
        
        )
      })}

     </div>
   )
 }
 
 export default App