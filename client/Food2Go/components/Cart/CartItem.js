import { View, Image, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import MenuStyles from '../../constants/styles/MenuStyles';
import { CartContext } from '../../context/CartContext';
import CartDescription from './CartDescription';



const CartItem = ({ item }) => {

  const {cart, setCart} = useContext(CartContext);

  const handleDeleteCart = (id) => {
    console.log(id);
    console.log(cart);
    setCart((prevValue) => {
      const allButId = prevValue.filter((dish) => dish.id !== id);
      return allButId;
    });
  };

  return (
    <SafeAreaView style = {{flex: 1}}>
    <View style = {{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
    <View style= {MenuStyles.imageContainer}>
      <Image
        source = {{uri: item.imgUrl}}
        resizeMode = 'cover'
        style = {MenuStyles.image}
      />
    </View>
    <CartDescription item ={item} deleteFromCart = {handleDeleteCart}></CartDescription>
    </View>
  </SafeAreaView>
  )
}

export default CartItem