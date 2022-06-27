import React, { useCallback, useEffect, useState } from 'react'
import Header from "./Header";
import './css/form.css'
import Paginations from '../Paginations';

function Home() {
  const [data, setData] = useState("")
  const [currentPage, setCurrentPage] = useState(0);

  let records = data.length
  let LIMIT = 2

  const onPageChange = useCallback(
    (event, page) => {
      event.preventDefault()
      setCurrentPage(page)
    },
    [setCurrentPage]
  );

  const currentData = data.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );
    

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
            Object.values(currentData).map((item, index) => {
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

      <div className="pagination-wrapper">
          <Paginations
            totalRecords={records}
            pageLimit={LIMIT}
            pageNeighbours={2}
            onPageChanged={onPageChange}
            currentPage={currentPage}
          />
        </div>
    </div>
  )
}

export default Home