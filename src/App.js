import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';




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
