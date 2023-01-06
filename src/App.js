import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Patients from './pages/Patient/Patients';
import Maladies from './pages/Maladie/Maladies';
import Profile from './pages/Patient/Profile';
import Detections from './pages/Patient/Detections';
import AddPatient from './pages/Patient/AddPatient';
import AddMaladie from './pages/Maladie/AddMaladie';




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
                  <Route path="/patients/add" element={<AddPatient/>} />
                  <Route path="/patients/profile/:id" element={<Profile/>} />
                  <Route path="/patients/detections/:id" element={<Detections/>} />


                  <Route path="/maladies" element={<Maladies/>} />
                  <Route path="/maladies/add" element={<AddMaladie/>} />

                </Routes> 
              </Router> 
            </div>
        </main>
    </div>
            
    </>
     
  )
}

export default App;
