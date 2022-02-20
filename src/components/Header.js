import { Link } from "react-router-dom"
import classes from './style/Header.module.css'
const Header = () => {
    return (
        <div className={classes.header}>
            <Link to='/home'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <button>Log Out</button>
        </div>
    )
}
export default Header;