import * as Yup from 'yup'

export const initialValuesRegister: RegisterFormValuesInterface = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  address: '',
  phone: '',
}

export interface RegisterFormValuesInterface {
  name: string
  email: string
  password: string
  confirmPassword: string
  address: string
  phone: string
}

export const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email('email invalido')
    .required('el email es un campo obligatorio')
    .matches(
      /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Debe tener un email válido (por ejemplo: usuario@correo.com)'
    ),

  password: Yup.string()
    .required('La contraseña es un campo obligatorio')
    .min(8, 'Debe contener al menos 8 caracteres')
    .matches(/[A-Z]/, 'Debe contener al menos una letra MAYUSCULA')
    .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
    .matches(/[0-9]/, 'Debe contener al menos un número')
    .matches(/[@$!%*?&]/, 'Debe contener al menos un carácter especial (@, $, !, %, *, ?, &)'),

  confirmPassword: Yup.string()
    .required('Es necesario confirmar la contraseña')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir'),

  name: Yup.string()
    .required('El nombre es un campo obligatorio')
    .trim('No puede comenzar ni terminar con espacios')
    .min(8, 'Debe contener al menos 8 caracteres'),

  address: Yup.string()
    .required('La direccion es un campo obligatorio')
    .min(5, 'Debe tener al menos 5 caracteres')
    .trim('No puede comenzar ni terminar con espacios')
    .max(100, 'Debe tener como máximo 100 caracteres'),

  phone: Yup.string()
    .required('El numero de telefono es un campo obligatorio')
    .matches(/^[0-9]+$/, 'Solo se permiten números')
    .min(10, 'Debe tener al menos 10 dígitos')
    .max(10, 'Debe tener como máximo 10 dígitos'),
})
