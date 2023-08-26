import React, { useState } from 'react'
import axios from 'axios'
function Again() {
    const [data,setData] = useState([])
    const [movie,setMovie] = useState('')
    function handlesubmit(e){
        e.preventDefault()
        axios.get("https://api.themoviedb.org/3/search/movie?query="+ movie +"&api_key=ea85630803e293cff396198c4410a67b")
        .then((res)=>{
            console.log(res.data.results)
            setData(res.data.results)
        })

    }
    handlesubmit()
  return (
    <div>


    </div>
  )
}

export default Again