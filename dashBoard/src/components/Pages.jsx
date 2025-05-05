import React from 'react'

import Dashboard from '../components/Dashboard/Dashboard'
import Sidebar from '../components/Sidebar/Sidebar'

const Pages = () => {
  return (
    <div>
      <div className='grid gap-3 p-5 grid-cols-[200px,_1fr] '>
        <Sidebar/>
        <Dashboard />
      </div>
    </div>
  )
}

export default Pages
