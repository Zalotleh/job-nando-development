import initializeStripe from './initializeStripe';
import { firebase_app} from '../firebase/config'
import { collection, getFirestore, addDoc, onSnapshot} from '@firebase/firestore';

const database = getFirestore(firebase_app);


export async function createCheckoutSession(user_id) {
  const collectionRef = collection(database, 'users', user_id,"checkout_sessions" );


  // Create a new checkout session in the subollection inside this users document
  const checkoutSession  = await addDoc( collectionRef,
      {
        mode: 'subscription',
          price: 'price_1N3cerL6LNzUqrJybC8jXFuW',
          success_url: window.location.origin,
          cancel_url: window.location.origin,
          subscription_data: {
            trial_settings: {
              end_behavior: {
                missing_payment_method: 'cancel',
              },
            },
            trial_period_days: 30,
          },
          payment_method_collection: 'if_required',
        }
        )


        // Retrieve the session ID from the newly created document reference
        // Wait for the CheckoutSession to get attached by the extension
        onSnapshot(checkoutSession, async (snap) => {
            const data = snap.data()
            console.log(data.sessionId)
          if (data.sessionId) {
            // Init Stripe
            const stripe = await initializeStripe();

            stripe.redirectToCheckout({ sessionId:data.sessionId });
          }
        });

}
