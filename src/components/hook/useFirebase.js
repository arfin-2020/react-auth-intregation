import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import '../firebase/Firebase.config';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
  };


const UseFirebase = ({children}) => {
    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const auth = getAuth();
    


    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                setUser(user);
            }).catch((error) => {
                setError(error.message)
                console.log(error)
            });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
              setUser(user)
            } else {
             
            }
          });
    },[auth])

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log('logout successfull.')
            setUser({})
        }).catch((error) => {
            console.log(error.message)
          });
    }

   const value = {
        user,
        error,
        signInWithGoogle,
        logOut
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default UseFirebase;