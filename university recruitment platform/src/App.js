import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import Home from './components/Home.js';
import CreateForm from './components/CreateForm.js';
import Admin from "./components/Admin";
import Register from "./components/Register.js";
import AdminDashboard from './components/AdminDashboard';
import CompanyReviewPage from './components/CompanyReviewPage';
import INF from './components/INF';

function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
     <Route path='/' element={<LoginPage/>} />
     <Route path='/register' element={<Register/>} />
     
     <Route path='/home' element={<Home/>} />
     <Route path='/admin' element={<Admin/>} />
     <Route path='/create/:type' element={<CreateForm/>} />
     <Route path='/adminDashboard' element={<AdminDashboard />} />
     <Route path='/infs' element={<INF name="INFs"/>} />
     <Route path='/jnfs' element={<INF name="JNFs"/>} />
     <Route path='/infs/:infid' element={<CompanyReviewPage/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
