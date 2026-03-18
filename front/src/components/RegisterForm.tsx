'use client'

import { PATHROUTES } from '@/utils/PathRoutes'
import Link from 'next/link'
import { useFormik } from 'formik'
import {
  initialValuesRegister,
  RegisterFormValuesInterface,
  registerValidationSchema,
} from '@/validators/registerSchema'
import { registerUserService } from '@/Services/auth.Services'
import { useRouter } from 'next/navigation'
import swal from 'sweetalert'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const RegisterForm = () => {
  const navigate = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const formik = useFormik<RegisterFormValuesInterface>({
    initialValues: initialValuesRegister,
    validationSchema: registerValidationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const valuesLower = { ...values, email: values.email.toLowerCase() }
        const res = await registerUserService(valuesLower)

        swal('¡Listo!', 'Usuario registrado con éxito', 'success')
        resetForm()
        navigate.push(PATHROUTES.LOGIN)
      } catch {
        swal('Error', 'Hubo un error al registrar el usuario', 'error')
        resetForm()
      }
    },
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-GrisClaro mt">
      <div className="bg-Blanco p-8 rounded-2xl shadow-xl w-full max-w-sm border border-Blanco">
        <h2 className="text-2xl font- text-center mb-6 text-NegroCarbon">Registrate</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-NegroCarbon mb-1">Nombre</label>
            <input
              type="text"
              className="placeholder:text-[14px] w-full px-4 py-2 border border-[#E5E5E5] rounded-lg bg-white text-NegroCarbon focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
              placeholder="Nombres y Apellidos"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
              {formik.errors.name}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-NegroCarbon mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="placeholder:text-[14px] w-full px-4 py-2 border border-[#E5E5E5] rounded-lg bg-white text-NegroCarbon focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
              placeholder="tucorreo@email.com"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
              {formik.errors.email}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-NegroCarbon mb-1">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="********"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="placeholder:text-[14px] w-full px-4 py-2 pr-10 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
              {formik.errors.password}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-NegroCarbon mb-1">
              Confirmacion Contraseña
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="********"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="placeholder:text-[14px] w-full px-4 py-2 pr-10 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
              {formik.errors.confirmPassword}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-NegroCarbon mb-1">Direccion</label>
            <input
              type="text"
              className="placeholder:text-[14px] w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
              placeholder="Ejemplo: Calle 10 #23-45 barrio san jose villavicencio-META"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              required
            />
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
              {formik.errors.address}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-NegroCarbon mb-1">Telefono</label>
            <input
              type="tel"
              className="placeholder:text-[14px] w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
              placeholder="Ejemplo 3111111111"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              required
            />
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
              {formik.errors.phone}
            </div>
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting || !(formik.isValid && formik.dirty)}
            className={`w-full bg-azulElectrico text-Blanco py-2 rounded-lg font-semibold ${
              !(formik.isValid && formik.dirty && !formik.isSubmitting)
                ? 'opacity-50 cursor-not-allowed '
                : ' hover:bg-Verde-Azulado transition-colors cursor-pointer '
            }`}
          >
            {formik.isSubmitting ? 'Enviando Registro...' : 'Enviar Registro'}
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-NegroCarbon">
          ¿Ya tienes una cuenta?{' '}
          <Link href={PATHROUTES.LOGIN} className="text-[#00C2A8] hover:underline">
            Inicia Sesion
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm
