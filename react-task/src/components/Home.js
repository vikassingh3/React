import React, { useEffect, useState } from 'react'
import Header from "./Header";


function Home() {
  const [data, setData] = useState("")
  useEffect(() => {

    fetch("https://react-training-mobcoder-default-rtdb.firebaseio.com/userdata.json")
      .then(Response => {
        return Response.json()
      }).then(data => {
        setData(data)
      })
  }, [])
  console.log(data)
  return (
    <div>
      <Header />
      <h3>Home</h3>
    </div>
  )
}

export default Home