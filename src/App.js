
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
