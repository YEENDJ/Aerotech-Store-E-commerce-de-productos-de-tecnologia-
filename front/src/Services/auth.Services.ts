import { RegisterFormValuesInterface } from "@/validators/registerSchema";

export const registerUserService = async (
    userData : RegisterFormValuesInterface
) => {
    try {
        const res = await fetch("http://localhost:3005/users/register", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(userData)
        });
        if (res.ok){
            return res.json()
        } else{
            throw new Error("Registro Fallido")
        }
    } catch (error:any) {
        throw new Error(error)
    }
}