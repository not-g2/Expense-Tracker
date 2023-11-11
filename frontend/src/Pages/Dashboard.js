import React from 'react'
import DashboardHomePage from '../Components/DashboardHome'
import NavBar from '../Components/NavBar'

const Dashboard = () => {
  return (
    <div>
        <div className='section-20'>
            <NavBar />
        </div>
        <div className='section-80'>
            <DashboardHomePage/>
        </div>
    </div>
  )
}

export default Dashboard