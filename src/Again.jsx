import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
function Again() {
    const [data,setData] = useState([])
    const [movie,setMovie] = useState([])
    let imgpath = "https://image.tmdb.org/t/p/original"

    

      function handlesubmit(){
        
        // e.preventDefault()
        axios.get("https://api.themoviedb.org/3/search/movie?query="+ movie +"&api_key=ea85630803e293cff396198c4410a67b")
        .then((res)=>{
          console.log(res.data.results)
          setData(res.data.results)
        })
        
      }
  
    
  return (
    <div>
<form onChange={handlesubmit}>
  <input type="text" placeholder='Search for movie' value={movie} onChange={(e)=> setMovie(e.target.value)} />
  <button type='submit'>Search </button>
</form>

{data.map((value,index)=>{
  return (
    <div className='photos'>
    <img  src={imgpath +data[index].poster_path} alt="hi" />
    <br />
    {/* <h1>{original_title}</h1> */}
    </div>
  )
})}

    </div>
  )
}

export default Again