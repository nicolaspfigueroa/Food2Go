import { View, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native/';
import { useNavigation } from "@react-navigation/native";
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import CartItem from '../components/Cart/CartItem';
import stripeService from '../services/StripeService';
import { CartContext } from '../../context/CartContext';


const ShopCart = () => {

  const {cart, setCart} = useContext(CartContext); 
  
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const testCart = [{id: 1, restaurantId: 2, name: 'Sushi', price: 26200}, {id: 2, restaurantId: 2, name: 'Sushi', price: 36200}];

  const navigation = useNavigation();

  useEffect(() => {
    initializePaymentSheet(cart);
  }, []);

  const getTotal = (cart) => {
    let total = 0;
    if (cart.length === 0) {
      return '';
    }
    else {
      total = cart.reduce((a,b) => {
        return a + b.price;
      }, 0)
    }
    return total;
  }

  const initializePaymentSheet = async (cart) => {
    const totalPrice = getTotal(cart);
    cart.push(totalPrice);
    console.log(cart);
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await stripeService.fetchPaymentSheetParams(cart);

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
      navigation.navigate("Profile");
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