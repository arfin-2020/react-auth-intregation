import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import UseFirebase from "./components/hook/useFirebase";
import Login from "./components/Login";
import PrivateOutlet from "./components/PrivateOutlet";
import Register from "./components/Register";
import Shipping from "./components/Shipping";

function App() {
  return (
    <Router>
      <UseFirebase>
        <Header />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/login" element={<Login />} />
          {/* <Route  path="/shipping" element={<PrivateOutlet><Shipping /></PrivateOutlet>} /> */}

          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="shipping" element={<Shipping />} />
          </Route>
        </Routes>
      </UseFirebase>
    </Router>
  );
}

export default App;
