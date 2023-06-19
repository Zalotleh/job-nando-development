import firebase_app from '../firebase/config'
import { doc, getFirestore, onSnapshot} from '@firebase/firestore';
import Stripe from 'stripe';


const database = getFirestore(firebase_app);

export async function createSubscription(user_id) {

    const docRef = doc(database, 'users', user_id);
    onSnapshot(docRef, async (snap)=>{
        if (snap.exists()) {
            const data = snap.data()
            const stripe_id = data.stripeId

            if(stripe_id){
                const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_SECRET_KEY);
                await stripe.subscriptions.create({
                    customer: stripe_id,
                    items:[
                        {
                            price:'price_1NJAugL6LNzUqrJyWWvmDN4P'
                        }
                    ],
                    trial_period_days:14,
                });
            } else {
                console.log('No stripeId found for the user:', user_id);
              }
            } else {
              console.log('Document does not exist for the user:', user_id);
            }
          });
        }