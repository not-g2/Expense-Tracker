import React from 'react'
import Welcome from './Welcome'
import QuickSummary from './QuickSummary'

const DashboardHomePage = () => {
  return (
    <div>
        <div className='header'>
          <Welcome/>
        </div>
        <div>
          <QuickSummary/>
        </div>
    </div>
  )
}

export default DashboardHomePage