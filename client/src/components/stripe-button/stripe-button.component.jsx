import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_THgyjMVz1sUCWeakQt0cMRKv00Q95D0QCz';

  const onToken = token => {
    axios
      .post({
        url: 'payment',
        data: {
          amount: priceForStripe,
          token: token
        }
      })
      .then(response => {
        alert('Payment Successful');
      })
      .catch(error => {
        console.log('Payment Error', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
