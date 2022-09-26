import React, { useEffect, useState } from 'react'
import Header from './pages/Header.js'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail.js'
import { Link } from 'react-router-dom'
import axios from 'axios'

const App = () => {
  const [con, setCon] = useState();
  const [loading, setLoading] = useState(false);
  const url = process.env.PUBLIC_URL + '/data.json'
  useEffect(() => {
    setLoading(false);
    const getData = async () => {
      const res = await axios.get(url);
      setCon(res.data);
      setLoading(true);
    }
    getData();
  }, [])



  return (
    <div>
      <div>
        {
          loading ? <div>
            {
              con.map(it => {
                return (
                  <div key={it.id}>
                    <Link to={"/list/" + it.id}>
                      {it.name}
                    </Link>
                  </div>
                )
              })
            }
            {con[0].id} </div>
            : <div>없네</div>
        }
      </div>
      <Header />

      <Routes>
        <Route path='/list/:num' element={<Detail list={con} />}></Route>
      </Routes>
    </div >
  )
}

export default App
