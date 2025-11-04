"use client"

import { userSessionInterface } from "@/interfaces/Iuser";

interface AuthContextProps {
    dataUser : userSessionInterface | null;
    setDataUser : (dataUser : userSessionInterface | null) => void;
    logout : () => void;

}