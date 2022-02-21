import { Link } from "react-router-dom";
import useFirebase from "./hook/useFirebase";
import classes from './style/Header.module.css';


const Header = () => {
    const {error, signInWithGoogle,user} = useFirebase();
    console.log(user)
    return (
        <div className={classes.header}>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            {/* <button>Log Out</button> */}
            {user?.name && <button>Log Out</button>}
        </div>
    )
}
export default Header;