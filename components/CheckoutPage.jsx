import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Layout2 from './Layout2';
import { createCheckoutSession } from '@/stripe/createCheckoutSession';
import styles from '../styles/CheckoutPage.module.css'

function CheckoutPage() {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);
  const { user } = useAuth();

  const handleSubscribeClick = async () => {
    setIsCreatingCheckout(true);
    await createCheckoutSession(user.uid);
  };

  return (
    <Layout2
        pageTitle={'Your Subscription Has Ended'}
    >
      <div className={styles.checkout_container}>
        <h2 clasName={styles.checkout_title}>Thank you for using our services!</h2>
        <p className={styles.checkout_description}>
            To continue accessing our premium features and exclusive content, please subscribe now.
        </p>
        <button className={styles.checkout_button} onClick={handleSubscribeClick} disabled={isCreatingCheckout}>
          {isCreatingCheckout ? 'Processing...Please Wait' : 'Subscribe Now'}
        </button>
      </div>
    </Layout2>
  );
}

export default CheckoutPage;
