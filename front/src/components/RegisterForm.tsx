
"use client";

import { PATHROUTES } from "@/utils/PathRoutes";
import Link from "next/link";
import { useFormik } from "formik";
import { initialValuesRegister,RegisterFormValuesInterface,registerValidationSchema } from "@/validators/registerSchema"; 




const RegisterForm = () => {

  const formik = useFormik <RegisterFormValuesInterface>({
    initialValues : initialValuesRegister,
    validationSchema:registerValidationSchema,
     onSubmit:() => {
      console.log("Submit exitoso");
      
     }
    });

  return (
    <div className="min-h-screen flex items-center justify-center bg-GrisClaro mt">
      <div className="bg-Blanco p-8 rounded-2xl shadow-xl w-full max-w-sm border border-Blanco">
        <h2 className="text-2xl font-bold text-center mb-6 text-NegroCarbon">
          Registrate
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Nombre
            </label>
            <input
              type="text"
              className="placeholder:text-[14px] w-full px-4 py-2 border border-[#E5E5E5] rounded-lg bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
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
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="placeholder:text-[14px] w-full px-4 py-2 border border-[#E5E5E5] rounded-lg bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
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
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className=" placeholder:text-[14px] w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
              placeholder="********"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
            {formik.errors.password}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Confirmacion Contraseña
            </label>
            <input
              type="password"
              className=" placeholder:text-[14px] w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
              placeholder="********"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              required
            />
            <div className="text-Verde-Azulado text-[14px] font-[var(--font-inter)]">
            {formik.errors.confirmPassword}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Direccion
            </label>
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
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Telefono
            </label>
            <input
              type="tel"
              className="placeholder:text-[14px] w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
              placeholder="Ejemplo 3106790518"
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
             disabled={ formik.isSubmitting || !(formik.isValid && formik.dirty)}

             className={`w-full bg-azulElectrico text-Blanco py-2 rounded-lg font-semibold ${
          !( formik.isValid && formik.dirty && !formik.isSubmitting) ? "opacity-50 cursor-not-allowed " : " hover:bg-Verde-Azulado transition-colors cursor-pointer "
        }`}
          >
            
            {formik.isSubmitting ? "Enviando Registro..." : "Enviar Registro"}
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-[#1A1A1A]">
          ¿Ya tienes una cuenta?{" "}
          <Link href ={PATHROUTES.LOGIN}className="text-[#00C2A8] hover:underline">
            Inicia Sesion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
