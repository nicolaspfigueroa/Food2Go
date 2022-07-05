import { View, Text, TouchableOpacity } from 'react-native'
import MenuStyles from '../../constants/styles/MenuStyles'
import React, { useContext }from 'react'
import { CartContext } from "../../context/CartContext";

const DishDescription = ({dish}) => {

  const {cart, setCart, numInCart, setNum} = useContext(CartContext);


  const addDish = (dish) => {
    let check = false;
    cart.forEach(item => {
      if (item.id === dish.id) {
        check = true;
        item.quantity = (parseInt(item.quantity)) + 1;
        setCart((prevValue) => [...prevValue]);
      }
    })
    if (!check) {
      const item = {...dish, quantity:1};
      setCart((prevValue) => [...prevValue, item])
    }
    setNum(prevValue => prevValue +1 );
    console.log(cart);
  };

  return (
    <View style = {MenuStyles.textContainer}> 
      <Text style= {MenuStyles.dishTitle}>{dish.name}</Text>
      <Text style = {MenuStyles.description}>Description goes here</Text>
      <Text style={MenuStyles.price}>$ {(dish.price/100).toFixed(2)}</Text>
      <TouchableOpacity onPress={() => {addDish(dish)}} style={MenuStyles.buttonContainer}>
        <Text style={MenuStyles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DishDescription