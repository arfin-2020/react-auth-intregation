import { Link } from "react-router-dom"
import classes from './style/Header.module.css'
const Login = () =>{
    return(
        <div className={classes.header}>
            <h2>Please Login....</h2>
            <button>Google SignIn</button>
            <br/>
            <Link to= '/register'>New User?</Link>
        </div>
    )
}

export default Login;