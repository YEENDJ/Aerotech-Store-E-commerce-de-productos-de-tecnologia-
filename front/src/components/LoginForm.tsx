
"use client";

import { PATHROUTES } from "@/utils/PathRoutes";
import Link from "next/link";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import { initialValuesLogin, loginValidationSchema,LoginFormValuesInterface } from "@/validators/loginSchema";
import { log } from "console";



const LoginForm = () => {

  const formik = useFormik <LoginFormValuesInterface>({
    initialValues : initialValuesLogin,
    validationSchema:loginValidationSchema,
     onSubmit:() => {
      console.log("Submit exitoso");
      
     }
    });

  return (
    <div className="min-h-screen flex items-center justify-center bg-GrisClaro">
      <div className="bg-Blanco p-8 rounded-2xl shadow-xl w-full max-w-sm border border-Blanco">
        <h2 className="text-2xl font-bold text-center mb-6 text-NegroCarbon">
          Iniciar Sesión
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
              placeholder="tucorreo@email.com"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
            {formik.errors.email}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
              placeholder="********"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
            {formik.errors.password}
          </div>

          <button
            type="submit"
            className=" cursor-pointer w-full bg-azulElectrico text-Blanco py-2 rounded-lg font-semibold hover:bg-Verde-Azulado transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-[#1A1A1A]">
          ¿No tienes cuenta?{" "}
          <Link href ={PATHROUTES.REGISTER}className="text-[#00C2A8] hover:underline">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
