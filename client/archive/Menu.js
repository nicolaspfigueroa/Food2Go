import { StyleSheet, View, Text, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect , useContext } from 'react'
import icons from '../constants/icons';
import  DishService  from '../services/DishService';
import NavTop from '../components/NavTop/NavTop';
import NavBottom from '../components/NavBottom/NavBottom';
import { CartContext } from "../context/CartContext";


const Menu = ( {route, navigation}) => {

//   const dishes = [{"id":1, "name" : "Langostinos arare","restaurant":"Coctel del Mar"  ,
//   "description" : "6 breaded shrimps in a crunchy bed of masago arare.",
//   "image" : "Coctel-del-Mar_langostinos-arare.png",
// "classification" : "appetizers", "price": 26200  },
// {"id":2, "name" : "Spring rolls","restaurant":"Coctel del Mar"  ,
//   "description" : "Crunchy shrimp spring rolls.",
//   "image" : "Coctel-del-Mar_spring-rolls.png",
// "classification" : "appetizers", "price": 16500  },
// {"id":3, "name" : "Salmon rice","restaurant":"Coctel del Mar"  ,
//   "description" : "Wok style rice with fresh vegies and salmon, served with mango sauce and siam albahaca.",
//   "image" : "Coctel-del-Mar_salmon-rice.png",
// "classification" : "rice", "price": 30100  }]
  
useEffect(() => {
  getDishes();
}, []);

const {cart, setCart} = useContext(CartContext);

const [dishes, setDishes] = useState([]);

const getDishes= async () => {
  try {
      const res = await DishService.getRestaurantDishes(route.params.restaurant.id);
      setDishes(res);
  } catch (error) {
    console.log(error);
  }
};

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
}   
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <NavTop></NavTop>
        <TouchableWithoutFeedback onPress={()=>navigation.goBack()}><Image source={icons.goback} style={{width:35,height:35}} /> 
        </TouchableWithoutFeedback> 
        <Text style={styles.txt}>{route.params.restaurant.name}</Text>
        <Image source={icons.whitelogo} style={{width:50,height:50, marginRight:10}} />
      </View>
      
      <View style={styles.menucontainer}>
          {dishes.map((dish) => (
        <TouchableWithoutFeedback onPress={() => {addDish(dish);}} key={dish.id}> 
          <View    style={styles.dish}>
                
                  <Text>{dish.name}</Text>
                  </View>
            
        </TouchableWithoutFeedback>
      ))}
      </View>
      <View style={styles.bottom}>
      <NavBottom></NavBottom>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    
    justifyContent: 'space-between',
   
  },
  header: {
    flex: .7,
    backgroundColor: '#38b000',
    fontSize: '10px',
    fontColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   
    height :70,
    width: '100%',
  },
  txt: { color: 'black',  fontSize: 20,
  fontWeight: "600"},
  bottom: {
    flex: .6,
    backgroundColor: '#38b000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tittle: {
    flex :1,
    width: 300,
    height: 165,
    shadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  menucontainer: {
    width: '100%',
    height: 400,
    flex: 3
  },
  dish: {
    width: 200,
    height:200,
  },
  dishdetail: {
    width: 150,
    height: 150,
  }
});

export default Menu

