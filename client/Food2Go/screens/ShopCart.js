import { FlatList, View, SafeAreaView, Text, Button, Alert } from 'react-native'
import React, { useEffect, useState, useContext } from 'react';
import { useStripe } from '@stripe/stripe-react-native/';
import { useNavigation } from "@react-navigation/native";
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import CartItem from '../components/Cart/CartItem';
import stripeService from '../services/StripeService';
import DishInfo from '../components/MenuComp/DishInfo';
import MenuStyles from '../constants/styles/MenuStyles';
import { CartContext } from '../context/CartContext';


const ShopCart = () => {

  const {cart, setCart} = useContext(CartContext); 
  
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const testCart = [{id: 1, restaurantId: 2, name: 'Sushi', price: 26200}, {id: 2, restaurantId: 2, name: 'Sushi', price: 36200}];

  const navigation = useNavigation();

  useEffect(() => {
    //let totalPrice = [100];

  }, []);

  const getTotal = (cart) => {
    let total = 0;
    if (cart.length === 0) {
      return '';
    }
    else {
      total = cart.reduce((a,b) => {
        return a + b.price * b.quantity;
      }, 0)
    }
    return total;
  }

  const initializePaymentSheet = async (totalPrice) => {
    //const totalPrice = getTotal(cart);
    //cart.push(totalPrice);
    console.log(cart);
    console.log(totalPrice);
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await stripeService.fetchPaymentSheetParams(totalPrice);

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
      setCart([]);
      navigation.navigate("Profile");
    }
  };

  if (cart.length > 0) {
    let totalPrice = [getTotal(cart)];
    initializePaymentSheet(totalPrice);
  };

  return (
    <SafeAreaView style = {{flex: 1}}>
      <NavTop></NavTop>
      <Text style={{fontSize: 24, fontWeight: '700', alignSelf: 'center', margin: 10}}>Your Cart</Text>
      <View style={{flex: 1}}>
      <View style = {{ zIndex: 0}}>
        <Text></Text>
        <FlatList
          data = {cart}
          renderItem = {({item}) => <CartItem key = {item.id} item = {item}></CartItem>} 
          keyExtractor = {(item) => item.id}
          showsVerticalScrollIndicator = {false}
        />
      </View>
    </View>
      <Button
        variant="primary"
        disabled={!loading || cart.length < 1}
        title="Checkout"
        onPress={openPaymentSheet}
      />
      <NavBottom></NavBottom>
    </SafeAreaView>
  )
}

export default ShopCart