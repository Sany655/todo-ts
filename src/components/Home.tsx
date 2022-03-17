import axios from 'axios'
import React, { useEffect } from 'react'

const Home:React.FC = () => {

    useEffect(() => {
        axios.get("/").then(res => console.log(res.data)).catch(err => console.log(err.message))
    },[])
  return (
    <div>Home</div>
  )
}

export default Home