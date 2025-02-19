import React from 'react'
import { BrowserRouter as Router,Routes,Route, Outlet, useParams  } from 'react-router-dom'
import TourList from '../components/TourList'
import TourForm from '../components/TourForm'
import TourUpdate from '../components/TourUpdate'

const Home = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<TourList/>} />
            <Route path='/create' element={<TourForm/>}/>
            <Route path='/update' element={<TourUpdate/>}/>
        </Routes>
    </Router>
  )
}

export default Home