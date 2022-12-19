import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './pages/DataTable';
import Home from './pages/Home';
import PhoneAdd from './pages/PhoneAdd';
import InterneteAdd from './pages/InternetAdd';
import PhoneHome from './pages/PhoneHome';
import InternetHome from './pages/InternetHome';


function App() {
  return (
    <div className="App">
        <Router>
          <AppBar color="dark" enableColorOnDark/>
          <Routes>
          <Route exact path="/" element={<Users/>}/>
          <Route exact path="/Phone-Internet/home" element={<Home/>}/>
          <Route exact path="/Phone-Internet/phone" element={<PhoneHome/>}/>
          <Route exact path="/Phone-Internet/internet" element={<InternetHome/>}/>
          <Route exact path="/Phone-Internet/phone/add" element={<PhoneAdd/>}/>
          <Route exact path="/Phone-Internet/internet/add" element={<InterneteAdd/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
