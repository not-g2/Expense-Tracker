import React from 'react'
import Welcome from './Welcome'
import QuickSummary from './QuickSummary'

const DashboardHomePage = () => {
  return (
    <div>
        <div>
          <Welcome/>
        </div>
        <div>
          <QuickSummary/>
        </div>
    </div>
  )
}

export default DashboardHomePage