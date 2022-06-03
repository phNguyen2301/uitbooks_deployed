import express from "express";
import { Payment, sendStripeApiKey } from "../controllers/PaymentController.js";

const router = express.Router();

import { isAuthenticatedUser } from "../middleware/auth.js";

router.route("/payment/process").post(isAuthenticatedUser, Payment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

export default router;
