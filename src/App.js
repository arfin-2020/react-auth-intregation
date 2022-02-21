import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UseFirebase from './components/hook/useFirebase';
import Login from './components/Login';
import Register from './components/Register';
import Shipping from './components/Shipping';

function App() {
  return (
    <Router>
       <UseFirebase>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/shipping' element={<Shipping/>} />
      </Routes>
      </UseFirebase>
    </Router>
  );
}

export default App;
