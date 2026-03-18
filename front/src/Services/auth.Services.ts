import { LoginFormValuesInterface } from '@/validators/loginSchema'
import { RegisterFormValuesInterface } from '@/validators/registerSchema'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005'
export const registerUserService = async (userData: RegisterFormValuesInterface) => {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
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
  } catch  {
    throw new Error('Error en el registro')
  }
}

export const loginUserService = async (userData: LoginFormValuesInterface) => {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })

    const data = await res.json()

    return { ok: res.ok, data }
  } catch (error: unknown) {
    throw new Error((error as Error).message || 'Error en la conexión')
  }
}

