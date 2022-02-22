import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hook/useFirebase";


const PrivateOutlet = () =>{
    const {user} = useAuth()
    // console.log(user);
        return user ? <Outlet/> :  <Navigate to="/login" />
}

export default PrivateOutlet;


