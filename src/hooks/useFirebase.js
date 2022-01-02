import initializeAuthentication from "../Firebase/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
    const signinwithpassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).finally(() => { setLoading(false) })
    }
    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setUserName(name);
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                setError(errorCode);
            });
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(
            result => { }
        )
    };

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
        signinwithpassword,
        registerNewUser,
        logout,
        signinUsinggoogle,
    }
}

export default useFirebase;