import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native/';
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import CartItem from '../components/Cart/CartItem';
import stripeService from '../services/StripeService';

const ShopCart = ({ cart, setCart }) => {

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const testCart = [{id: 1, restaurantId: 2, name: 'Sushi', price: 26200}];

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await stripeService.fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      merchantDisplayName: 'Food2Go'
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };




  const handleDeleteCart = (id) => {
    console.log(id);
    console.log(cart);
    setCart((prevValue) => {
      const allButId = prevValue.filter((dish) => dish.id !== id);
      return allButId;
    });
  };

  return (
    <View>
      <NavTop></NavTop>
      <Text>ShopCart</Text>
      {cart.map((dish) => {
        <CartItem key = {dish.id} dish = {dish} handleDeleteCart = {handleDeleteCart} ></CartItem>
      })}
      <Button
        variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
      <NavBottom></NavBottom>
    </View>
  )
}

export default ShopCart