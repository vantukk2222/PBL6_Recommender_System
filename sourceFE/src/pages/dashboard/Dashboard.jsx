import React from 'react'
import { Outlet } from 'react-router-dom'
import { Banner } from '../../components/banners/Banner'

const Dashboard = () => {
  return (
    <div>
     <Banner/>
      {/* Child routes will be rendered here */}
     
    </div>
  )
}

export default Dashboard