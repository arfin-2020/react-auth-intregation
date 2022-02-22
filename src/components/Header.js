import { Link } from "react-router-dom";
import { useAuth } from "./hook/useFirebase";
import classes from './style/Header.module.css';


const Header = () => {
    const {user, logOut} = useAuth();
 
    return (
        <div className={classes.header}>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/shipping'>Shipping</Link>
            {user?.displayName && <span>{user.displayName}</span>}
            {user?.displayName && <button onClick={logOut}>Log Out</button>}
        </div>
    )
}
export default Header;