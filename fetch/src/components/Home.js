import React, { useEffect, useState } from 'react'
import Header from "./Header";
import './css/form.css'

function Home() {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch("http://localhost:8080/getUsers")
      .then(Response => {
        console.log(Response);
        return Response.json()
      }).then(data => {
        console.log(data);
        setData(data)
      })
  }, [])
  return (
    <div>
      <Header />
      <table className='tbl'>
        <thead>
          <tr>
            <th className='tbl'>Name</th>
            <th className='tbl'>Email</th>
            <th className='tbl'>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.values(data).map((item, index) => {
              return (
                <tr key={index} className='tbl'>
                  <td className='tbl'>{item.Name}</td>
                  <td className='tbl'>{item.Email}</td>
                  <td className='tbl'>{item.Password}</td>
                </tr>
              )
            })
            
          }

        </tbody>
      </table>
    </div>
  )
}

export default Home