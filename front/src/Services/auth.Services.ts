import { LoginFormValuesInterface } from '@/validators/loginSchema'
import { RegisterFormValuesInterface } from '@/validators/registerSchema'

export const registerUserService = async (userData: RegisterFormValuesInterface) => {
  try {
    const res = await fetch('http://localhost:3005/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Registro Fallido')
    }
  } catch (error: any) {
    throw new Error(error)
  }
}

export const loginUserService = async (userData: LoginFormValuesInterface) => {
  try {
    const res = await fetch('http://localhost:3005/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })

    const data = await res.json()

    return { ok: res.ok, data }
  } catch (error: any) {
    throw new Error(error.message || 'Error en la conexión')
  }
}
