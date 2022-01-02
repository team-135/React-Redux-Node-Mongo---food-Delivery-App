import initializeAuthentication from "../Firebase/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signinUsinggoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setLoading(false)
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setLoading(false);
        })
    }, []);
    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error)
        }).finally(() => setLoading(false));
    }
    return {
        user,
        error,
        loading,
        logout,
        signinUsinggoogle,
    }
}

export default useFirebase;