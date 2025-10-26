
"use client";

import { PATHROUTES } from "@/utils/PathRoutes";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-GrisClaro">
      <div className="bg-Blanco p-8 rounded-2xl shadow-xl w-full max-w-sm border border-Blanco">
        <h2 className="text-2xl font-bold text-center mb-6 text-NegroCarbon">
          Registrate
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[#E5E5E5] rounded-lg bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#007BFF]"
              placeholder="tucorreo@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-GrisClaro rounded-lg bg-Blanco text-NegroCarbon focus:outline-none focus:ring-1 focus:ring-GrisClaro"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className=" cursor-pointer w-full bg-azulElectrico text-Blanco py-2 rounded-lg font-semibold hover:bg-Verde-Azulado transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-[#1A1A1A]">
          ¿Ya estas Registrado?{" "}
          <Link href ={PATHROUTES.LOGIN}className="text-[#00C2A8] hover:underline">
            Inicia Sesion
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
