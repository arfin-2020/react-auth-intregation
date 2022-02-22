import { useAuth } from './hook/useFirebase';
import classes from './style/Header.module.css';

const Home = () =>{
    const {user} = useAuth();
    return(
        <div className={classes.header}>
           <h1>Wellcome: {user?.displayName}</h1>
        </div>
    )
}

export default Home;