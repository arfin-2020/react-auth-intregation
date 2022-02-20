import { Link } from "react-router-dom";
import classes from './style/Header.module.css'
const Register = () =>{
    return(
        <div className={classes.header}>
            <h2>Please Register</h2>
            <form>
                <input type="name"/>
                <br/>
                <input type="email"/>
                <br/>
                <input type="password"/>
                <br/>
                <input type='submit'/>
            </form>
            <Link to='/login'>Already register</Link>
        </div>
    )
}

export default Register;