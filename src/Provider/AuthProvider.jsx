import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
     const googleLogin =(provider)=>{
        return signInWithPopup(auth,provider)
     }

    //  facebook login

    const facebookLogin = (provider)=>{
        return signInWithPopup(auth,provider)
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observe user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }



        , [])






    const authInfo = { user, setUser, loading, setLoading, createUser, loginUser,googleLogin,facebookLogin, logOut }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;