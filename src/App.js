import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard  from "./pages/HomeLogin";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard  />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
