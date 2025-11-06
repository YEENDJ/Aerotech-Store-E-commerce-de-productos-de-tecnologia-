
"use client";

import { PATHROUTES } from "@/utils/PathRoutes";
import Link from "next/link";
import {useFormik } from "formik";
import { initialValuesLogin, loginValidationSchema,LoginFormValuesInterface } from "@/validators/loginSchema";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { loginUserService } from "@/Services/auth.Services";
import { useAuth } from "@/contexts/AuthContext";




const LoginForm = () => {

   const {setDataUser} = useAuth()
   const router = useRouter();
   const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik <LoginFormValuesInterface>({
    initialValues : initialValuesLogin,
    validationSchema:loginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
    // setDataUser(res) 

      try {

        const valuesLower = { ...values, email: values.email.toLowerCase() };
        const res = await loginUserService(valuesLower);
        

        if (!res.ok) {
          const msg = res.data?.message?.toLowerCase() || "";

          if (msg.includes("user") || msg.includes("no existe")) {
            swal("Correo no registrado", "Verifica tu correo o regístrate", "warning");
          } else if (msg.includes("password") || msg.includes("contraseña")) {
            swal("Contraseña incorrecta", "Vuelve a intentarlo", "error");
          } else {
            swal("Error", "Hubo un problema al iniciar sesión", "error");
          }
          return;
        }

        setDataUser(res.data);
        swal("¡Listo!", "Inicio de Sesión exitoso", "success");
        resetForm();
        router.push("/"); 

      } catch (error: any) {
        swal("Error", "No se pudo conectar con el servidor", "error");
        resetForm();
      }
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
            <label className="block text-sm font-medium text-NegroCarbon mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="placeholder:text-[14px] w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
                placeholder="********"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
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

          <button
            type="submit"
             disabled={ formik.isSubmitting || !(formik.isValid && formik.dirty)}

             className={`w-full bg-azulElectrico text- py-2 rounded-lg font-semibold ${
          !( formik.isValid && formik.dirty && !formik.isSubmitting) ? "opacity-50 cursor-not-allowed " : " hover:bg-Verde-Azulado transition-colors cursor-pointer "
        }`}
          >
            {formik.isSubmitting ? "Iniciando Sesion..." : "Entrar"}
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-NegroCarbon">
          ¿No te has registrado?{" "}
          <Link href ={PATHROUTES.REGISTER}className="text-[#00C2A8] hover:underline">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
