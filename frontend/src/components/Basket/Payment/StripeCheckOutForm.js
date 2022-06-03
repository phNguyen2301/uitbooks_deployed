import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./stripeCheckOutForm.scss";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../../redux/features/order/newOrderSlice";
import { clearCart } from "../../../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function StripeCheckOutForm(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const stripe = useStripe();
  const elements = useElements();
  const clientSecret = props.clientSecret;

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          //   setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      // redirect: "if_required",
      redirect: "if_required",
    });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (result.error) {
      console.log(result);
      if (
        result.error.type === "card_error" ||
        result.error.type === "validation_error"
      ) {
        setMessage(result.error.message);
      } else {
        setMessage("An unexpected error occured.");
      }
    } else {
      if (result.paymentIntent.status === "succeeded") {
        const order = {
          orderItems: cartItems,
          user: user,
          shippingInfo: shippingInfo,
          paymentInfo: {
            method: "Bank",
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          },
        };

        dispatch(createOrder(order));
        dispatch(clearCart());
        navigate("/confirm-order");
      }
    }
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
