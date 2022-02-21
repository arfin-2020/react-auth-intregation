import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import '../firebase/Firebase.config';


const useFirebase = () => {
    const [user, setUser] = useState({});
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
    return {
        user,
        error,
        signInWithGoogle
    }
}

export default useFirebase;