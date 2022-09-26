import React from 'react'
import { company, content } from './data/data.js'
import Header from './pages/Header.js'
import { Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail.js'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Header data={company} />
      {
        content.map(it => {
          return (<div key={it.id} > <Link to={'/list/' + it.id}>{it.id}</Link>  </div >)
        })

      }

      <Routes>
        <Route path='/list/:num' element={<Detail list={content} />}>
        </Route>
      </Routes>
    </div >
  )
}

export default App
