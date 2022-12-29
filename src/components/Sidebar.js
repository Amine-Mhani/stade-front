import React from 'react'
import { Feather } from 'feather-icons-react/build/IconComponents'

function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
    <div className="sidebar-content js-simplebar">
      <a className="sidebar-brand" href="index.html">
        <span className="align-middle">ENSAJ-DETECTION</span>
      </a>

      <ul className="sidebar-nav">
        <li className="sidebar-header">
          Pages
        </li>

        <li className="sidebar-item active">
          <a className="sidebar-link" href="/">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a className="sidebar-link" href="/patients">
            <i className="align-middle" data-feather="user"></i> <span className="align-middle">Patient</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="/maladies">
            <i className="align-middle" data-feather="user"></i> <span className="align-middle">Maladies</span>
          </a>
        </li>


      </ul>

    </div>
  </nav>
  )
}

export default Sidebar