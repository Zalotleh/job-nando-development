import {loadStripe } from "@stripe/stripe-js";

const initializeStripe = async () => {
    const stripePromise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  
  return stripePromise;
};
export default initializeStripe;
