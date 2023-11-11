import React from 'react'
import Welcome from './Welcome'
import QuickSummary from './QuickSummary'

const DashboardHomePage = () => {
  return (
    <div>
        <div className='dashboard-header'>
          <Welcome/>
        </div>
        <div className='dashboard-body'>
          <QuickSummary/>
        </div>
    </div>
  )
}

export default DashboardHomePage