import {loadStripe } from "@stripe/stripe-js";

let stripePromise= null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      'pk_test_51N3IolL6LNzUqrJyucoGUgLcnBbavUL6lUzhugcemHbDeDes61HQJjUiN2aBzH3U0XgSt8Mgh3AI71vgR6EKE2tX005LFtNKql'
    );
  }
  return stripePromise;
};
export default initializeStripe;
