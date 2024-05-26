import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

const [user,setUser] =useState('')
const [loading,setLoading]=useState(true)

// register
const createUser = (email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)

}

// login 
const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// logout
const logOut =()=>{
    return signOut(auth)
}

// observe user 
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
       setLoading(false)
        setUser(currentUser)
    })
    return ()=>{
      unsubscribe()
    }
}

    
    
    ,[])






const authInfo ={user,setUser,loading,createUser,loginUser,logOut}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;