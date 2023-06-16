import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieAccept = () => {
  return (
    <CookieConsent
      enableDeclineButton
      flipButtons
      location="bottom"
      buttonText="I understand"
      cookieName="YourCoockieName"
      style={{ background: 'rgb(22 78 99)' }}
      buttonStyle={{
        color: '#000',
        fontSize: '12px',
      }}
      declineButtonStyle={{
        margin: '4px 4px 4px 0',
        fontSize: '12px',

      }}
      expires={450}
    >
      This website uses cookies
    </CookieConsent>
  );
};
export default CookieAccept;