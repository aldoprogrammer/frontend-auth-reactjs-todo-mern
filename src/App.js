import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link> |
        <Link to="/login"> Login</Link> |
        <Link to="/register"> Register</Link>
      </div>
      <hr/>
      <Routes>
        <Route path="/login">
          {/* <Login /> */}
        </Route>
        <Route path="/register" element={<Register />} />
          
        
      </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
