"use client";

import { useEffect } from "react";

const Payphone = ({ onPaymentSuccess }) => {
  useEffect(() => {
    const payphoneCss = document.createElement("link");
    payphoneCss.rel = "stylesheet";
    payphoneCss.href = "https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.css";
    document.head.appendChild(payphoneCss);

    const payphoneScript = document.createElement("script");
    payphoneScript.type = "module";
    payphoneScript.src = "https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.js";
    document.head.appendChild(payphoneScript);

    payphoneScript.onload = () => {
      window.ppb = new PPaymentButtonBox({
        token: "bLuU9g3JRSo24J5rpRae4fStH5zrT0g87SFokso0Z27PhvgNZmdG_MIrbhMPQ-jR5ncjSI1t1L5htFnrhgx2wxTCavN7zpu5HHCwNxJDji1YzeWcq5ABBUT7p8qLveo7dlZqLjNzXmVPtwJN-sC1DTbGRgfXNJ-OzpdwRK5lA0KoQXWGgyPcUbWt8hksVHB69LDvuD1T34PaqNa3zUy_eM1cvekiAdK0nFNLoue8LxDMheQ4xghEaBwYTUi_8RpuokhQB8TPX7lig1TZxTlxdwSVE-EFFbwxY8AzUucaGCoBrrqJaesfRsdpMpPEaeWewnDflg",
        amount: 180, // Total en centavos
        amountWithoutTax: 180,
        amountWithTax: 0,
        tax: 0,
        service: 0,
        tip: 0,
        reference: "Motivo del pago",
        clientTransactionId: `ID-${new Date().getTime()}`,
        onPaymentConfirmed: (response) => {
          console.log("Payment Confirmed:", response);
          if (onPaymentSuccess) {
            onPaymentSuccess(response);
          }
        },
        onPaymentError: (error) => {
          console.error("Payment Error:", error);
        },
      }).render("pp-button");
    };

    return () => {
      payphoneCss.remove();
      payphoneScript.remove();
    };
  }, [onPaymentSuccess]);

  return (
    <div className="mt-8 flex justify-center">
      <div id="pp-button"></div>
    </div>
  );
};

export default Payphone;
