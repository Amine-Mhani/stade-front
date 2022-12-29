import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

function Dashboard() {
  return (
    <>
    <Sidebar/>
    <div className="main">
        <Navbar/>
        <main className="content">
            <div className="container-fluid p-0">
            </div>
        </main>
    </div>
    </>
  )
}

export default Dashboard