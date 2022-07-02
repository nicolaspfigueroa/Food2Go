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
      console.log(route.params.restaurant.id);
      const res = await DishService.getRestaurantDishes(route.params.restaurant.id);
      setDishes(res);
      console.log(res);
      console.log(dishes);
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

const SHADOWS = {
  light: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  medium: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
};


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
  txt: { color: 'white',  fontSize: 20,
  fontWeight: "bold"},
  bottom: {
    flex: .6,
    backgroundColor: '#38b000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }



,

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
    ...SHADOWS.dark
  },
  dishdetail: {
    width: 150,
    height: 150,
  }
});

export default Menu



// <Callout onPress={() => {console.log('here you should be  directed to pay for '+dish.name) }}>
//         <View style={styles.dishdetail}>
//             <Text>{dish.name}</Text>
//             <Text>{dish.description}</Text>
//             <Text>{dish.price}</Text>
//         </View> 
//       </Callout>    