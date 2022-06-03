import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  let productPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const shippingCharges = productPrice > 80000 ? 0 : 50000;

  return productPrice + shippingCharges;
};

export const Payment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(req.body.items),
    currency: "VND",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      company: "UIT Book",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

export const sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
