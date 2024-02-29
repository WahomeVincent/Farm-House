import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState('')

    function createUser (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        }) 
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{createUser, user, logOut, logIn}} >
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}