import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Patients from './pages/Admin/Patients';
import Maladies from './pages/Admin/Maladies';
import Profile from './pages/Admin/Profile';
import Detections from './pages/Admin/Detections';




function App() {
  return (
    <>
    <Sidebar/>
    <div className="main">
        <Navbar/>
        <main className="content">
            <div className="container-fluid p-0">
              <Router> 
                <Routes>    
                  <Route path="/" element={<Dashboard/>} />
                  <Route path="/patients" element={<Patients/>} />
                  <Route path="/patients/profile/:id" element={<Profile/>} />
                  <Route path="/patients/detections/:id" element={<Detections/>} />


                  <Route path="/maladies" element={<Maladies/>} />

                </Routes> 
              </Router> 
            </div>
        </main>
    </div>
            
    </>
     
  )
}

export default App;
