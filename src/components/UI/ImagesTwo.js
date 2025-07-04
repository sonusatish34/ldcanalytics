import React, { useEffect, useState } from 'react'
const ComponentName = props => {

  return (
    <div className='images-two'>
    
      <div className={`stat-card card-blue `}>
        <div className="stat-info">
          <p className="stat-title">LongDriveCars Traffic Analytics</p>
          <p className="stat-title">Monthly Traffic</p>
          <h2 className="stat-value">{"1,17,000+"}</h2>
          <h2 className="stat-value">{"117k+"}</h2>
        </div>
      </div>
      <div className={`stat-card card-purple `}>
        <div className="stat-info">
          <p className="stat-title"> Dozzy Traffic Analytics</p>
          <p className="stat-title">Monthly Traffic</p>
          <h2 className="stat-value">{"26,700+"}</h2>
          <h2 className="stat-value">{"26.7k +"}</h2>
        </div>
      </div>
    </div>
  )
}

export default ComponentName;
