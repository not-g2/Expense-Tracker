import React from 'react'
import Welcome from '../Components/Welcome'
import QuickSummary from '../Components/QuickSummary'

const HomePage = () => {
  return (
    <div>
        <div className="Header">
          <Welcome />
        </div>
        <div className="Body">
          <QuickSummary />
        </div>
    </div>
  )
}

export default HomePage