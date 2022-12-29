import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import Sidebar from './components/Sidebar';




function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
