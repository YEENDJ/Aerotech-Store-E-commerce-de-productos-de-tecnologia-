import * as Yup from "yup";

export const initialValuesLogin: LoginFormValuesInterface = {
    email: "",
    password: ""
}

export interface LoginFormValuesInterface {
    email: string;
    password: string
}

export const loginValidationSchema = Yup.object({
    email: Yup.string()
    .email("email invalido")
    .required("el email es un campo obligatorio"),

    password: Yup.string()
    .min(8,"Debe contener al menos 8 caracteres")
    .matches(/[A-Z]/,"Debe contener al menos una letra MAYUSCULA")
    .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(/[@$!%*?&]/, "Debe contener al menos un carácter especial (@, $, !, %, *, ?, &)"),
})