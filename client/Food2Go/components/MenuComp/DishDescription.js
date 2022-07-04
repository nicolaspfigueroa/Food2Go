import { View, Text, TouchableOpacity } from 'react-native'
import MenuStyles from '../../constants/styles/MenuStyles'
import React, { useContext }from 'react'
import { CartContext } from "../../context/CartContext";

const DishDescription = ({dish}) => {

  const {cart, setCart} = useContext(CartContext);

  const addDish = (dish) => {
    let check = false;
    cart.forEach(item => {
      if (item.id === dish.id) {
        check = true;
        item.quantity = (parseInt(item.quantity)) + 1;
      }
    })
    if (!check) {
      const item = {...dish, quantity:1};
      setCart((prevValue) => [...prevValue, item])
    }
    console.log(cart);
  };

  return (
    <View style = {MenuStyles.textContainer}> 
      <Text style= {MenuStyles.dishTitle}>{dish.name}</Text>
      <Text style = {MenuStyles.description}>Description goes here</Text>
      <Text style={MenuStyles.price}>{dish.price} pesos</Text>
      <TouchableOpacity onPress={() => {addDish(dish)}} style={MenuStyles.buttonContainer}>
        <Text style={MenuStyles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DishDescription