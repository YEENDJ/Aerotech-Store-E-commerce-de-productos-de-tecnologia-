"use client"

import { userSessionInterface } from "@/interfaces/Iuser";
import { createContext, useContext, useEffect, useState } from "react";

const USERSESSIONLOCALSTORAGE = "userSession"

interface AuthContextProps {
    dataUser : userSessionInterface | null;
    setDataUser : (dataUser : userSessionInterface | null) => void;
    logout : () => void;

}

 const AuthContext = createContext<AuthContextProps> ({
    dataUser: null,
    setDataUser: () => {},
    logout: () => {}
}) 

interface AuthProviderProps {
    children: React.ReactElement;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [dataUser, setDataUser] = useState<userSessionInterface | null> (null)

    useEffect(()=> {
        if (dataUser){
            localStorage.setItem(USERSESSIONLOCALSTORAGE, JSON.stringify(dataUser));
        }
    }, [dataUser]);

    useEffect (()=>{
        if (typeof window !== "undefined" && window.localStorage) {
            const userInfo = localStorage.getItem(USERSESSIONLOCALSTORAGE);
            if (userInfo){
                setDataUser(JSON.parse(userInfo))
            }
        }
    }, []);

    const logout =() => {
        setDataUser(null);
         if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem(USERSESSIONLOCALSTORAGE);
         }
    };

    return (
        <AuthContext.Provider value={{dataUser, setDataUser, logout}}>
         {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => useContext(AuthContext)

