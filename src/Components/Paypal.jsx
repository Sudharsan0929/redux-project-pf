import { loadScript } from "@paypal/paypal-js";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Paypal() {
  const { totalPrice } = useSelector((state) => state.cart);
  console.log(totalPrice)
  const paypalRef = useRef(null); // Reference to ensure buttons render once

  useEffect(() => {
    // Ensure totalPrice is valid
    if (!totalPrice || totalPrice <= 0) {
      console.error("Total price must be greater than 0.");
      return;
    }

    // Avoid rendering multiple buttons
    if (paypalRef.current) return;

    loadScript({
      "client-id":
        "AZgtzq9vUWWCR007YAAWugUeuyt8WLjTDrQTFzq75iihxuCJxoGkMZEFIeW597d_sPV0r0hieyWgBar2", // Replace with your Sandbox client ID
      currency: "USD",
    })
      .then((paypal) => {
        if (paypal) {
          
          paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalPrice.toFixed(2),
                      },
                    },
                  ],
                });
              },
              onApprove: (data, actions) => {
                return actions.order.capture().then((details) => {
                  alert(
                    `Transaction completed by ${details.payer.name.given_name}`
                  );
                });
              },
              onError: (err) => {
                console.error("PayPal Checkout Error:", err);
              },
            })
            .render("#paypal-button-container"); // Render buttons once
          paypalRef.current = true; // Mark as rendered
        } else {
          console.error("PayPal SDK failed to load.");
        }
      })
      .catch((error) => {
        console.error("Error loading PayPal script:", error);
      });
  }, [totalPrice]);

  return <div id="paypal-button-container"></div>;
}

export default Paypal;
