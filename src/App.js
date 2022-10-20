import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import User from './components/user/User';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Login/>} />
          <Route exact path="/users" element={<User/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
