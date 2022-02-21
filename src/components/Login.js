import { Link } from "react-router-dom";
import  { useAuth } from "./hook/useFirebase";
import classes from './style/Header.module.css';

const Login = () =>{
    const { signInWithGoogle} = useAuth();
    // console.log(user.displayName)
    return(
        <div className={classes.header}>
            <h2>Please Login....</h2>
            <button onClick={signInWithGoogle}>Google SignIn</button>
            <br/>
            <Link to= '/register'>New User?</Link>
        </div>
    )
}

export default Login;