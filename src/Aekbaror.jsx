import React, { useState } from 'react'
import axios from 'axios';

function Aekbaror() {
    const [data,setData] = useState([]);
    const [movieName,setMovie] = useState('');
    function handlesubmit(e)
    {
        e.preventDefault()
        axios.get("https://api.themoviedb.org/3/search/movie?query="+ movieName +"&api_key=ea85630803e293cff396198c4410a67b")
    
        .then((res)=>{
            setData(res.data.results)
            console.log(res.data.results)

        })
    }
    
let imgpath =  "https://image.tmdb.org/t/p/original"
   
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Search Movie'  value={movieName} onChange={ (e) =>{ setMovie(e.target.value)}} />
            <button type='submit'> Search</button>

        </form>
        
        {data.map((value,index)=>{
            return(
                
                <div> 

                <img src={imgpath+data[index].poster_path} alt="hello" />
                
                <h1>
                {value.title}
                </h1>
                </div>
                
            )
        })}
    </div>
  )
}

export default Aekbaror