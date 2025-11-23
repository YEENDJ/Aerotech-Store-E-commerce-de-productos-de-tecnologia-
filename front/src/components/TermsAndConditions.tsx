export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Términos y Condiciones</h1>

      <p className="mb-4">
        Bienvenido a <span className="font-semibold">Drone Store</span>. Al acceder y utilizar nuestro sitio web,
        aceptas los siguientes Términos y Condiciones. Te recomendamos leerlos cuidadosamente.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Aceptación de los términos</h2>
      <p className="mb-4">
        Al utilizar nuestra plataforma, confirmas que entiendes, aceptas y te comprometes a cumplir estas
        condiciones. Si no estás de acuerdo, te pedimos no utilizar el servicio.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Información del usuario</h2>
      <p className="mb-4">
        Para realizar compras, deberás registrarte proporcionando datos reales y actualizados. Eres responsable
        de mantener la confidencialidad de tu cuenta y contraseña.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Productos y disponibilidad</h2>
      <p className="mb-4">
        Los productos ofrecidos están sujetos a disponibilidad. Hacemos todo lo posible por mantener información
        precisa, pero pueden existir variaciones o errores en inventario, precio o descripción.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Precios y pagos</h2>
      <p className="mb-4">
        Los precios están expresados en moneda local e incluyen impuestos, salvo que se indique lo contrario.
        Aceptamos diversos métodos de pago seguros. El pedido será procesado únicamente tras confirmar el pago.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Envíos</h2>
      <p className="mb-4">
        Realizamos envíos a nivel nacional a través de transportadoras aliadas. Los tiempos de entrega pueden
        variar según disponibilidad y ubicación. No nos hacemos responsables por retrasos atribuibles a terceros.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Garantías</h2>
      <p className="mb-4">
        Todos los productos cuentan con garantía oficial del fabricante. Esta cubre defectos de fábrica y no
        daños ocasionados por mal uso, golpes o modificaciones no autorizadas.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Devoluciones</h2>
      <p className="mb-4">
        Puedes solicitar cambios o devoluciones dentro de los primeros 5 días hábiles tras recibir tu compra,
        siempre y cuando el producto esté en perfectas condiciones y con su empaque original.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Limitación de responsabilidad</h2>
      <p className="mb-4">
        No seremos responsables por daños indirectos, incidentales o consecuentes derivados del uso o
        imposibilidad de usar nuestro sitio o productos.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Modificaciones</h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios
        serán publicados en esta misma página y aplicarán desde su publicación.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contacto</h2>
      <p className="mb-10">
        Si tienes dudas o inquietudes, puedes escribirnos al correo:{" "}
        <span className="font-semibold">soporte@dronestore.com</span>.
      </p>

      <p className="text-center text-sm text-gray-500">
        Última actualización: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
