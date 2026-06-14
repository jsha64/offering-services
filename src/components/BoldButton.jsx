import { useEffect, useRef } from "react";

export default function BoldButton({ servicio }) {
  console.log(import.meta.env.VITE_BOLD_PUBLIC_KEY);
  
  const buttonRef = useRef(null);

  useEffect(() => {

    const cargarBoton = async () => {

      const orderId = `ORDER-${Date.now()}`;
      const monto = 10000;
      const divisa = "COP";

      // pedir hash al backend
      const response = await fetch(
        "http://localhost:3001/generar-hash",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            orderId,
            monto,
            divisa
          })
        }
      );

      const data = await response.json();

      console.log(data);

      // limpiar botón anterior
      buttonRef.current.innerHTML = "";

      // crear script Bold
      const script = document.createElement("script");

      script.src =
        "https://checkout.bold.co/library/boldPaymentButton.js";

      script.setAttribute(
        "data-bold-button",
        "dark-S"
      );

      script.setAttribute(
        "data-api-key",
        import.meta.env.VITE_BOLD_PUBLIC_KEY
      );

      script.setAttribute(
        "data-order-id",
        orderId
      );

      script.setAttribute(
        "data-currency",
        divisa
      );

      script.setAttribute(
        "data-amount",
        monto
      );

      script.setAttribute(
        "data-integrity-signature",
        data.hash
      );

      script.setAttribute(
        "data-description",
        servicio
      );

      script.setAttribute(
        "data-redirection-url",
        `${window.location.origin}/gracias`
      );

      script.setAttribute(
        "data-render-mode",
        "embedded"
      );

      buttonRef.current.appendChild(script);
    };

    cargarBoton();

  }, [servicio]);

  return <div ref={buttonRef}></div>;
}