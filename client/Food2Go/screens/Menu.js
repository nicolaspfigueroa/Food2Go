import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { DishService } from '../services/DishService';


const Menu = ( {route, navigation}) => {

  const dishes = [{"id":1, "name" : "Langostinos arare","restaurant":"Coctel del Mar"  ,
  "description" : "6 breaded shrimps in a crunchy bed of masago arare.",
  "image" : "Coctel-del-Mar_langostinos-arare.png",
"classification" : "appetizers", "price": 26200  },
{"id":2, "name" : "Spring rolls","restaurant":"Coctel del Mar"  ,
  "description" : "Crunchy shrimp spring rolls.",
  "image" : "Coctel-del-Mar_spring-rolls.png",
"classification" : "appetizers", "price": 16500  },
{"id":3, "name" : "Salmon rice","restaurant":"Coctel del Mar"  ,
  "description" : "Wok style rice with fresh vegies and salmon, served with mango sauce and siam albahaca.",
  "image" : "Coctel-del-Mar_salmon-rice.png",
"classification" : "rice", "price": 30100  }]
  
// useEffect(() => {
//   getDishes();
// }, []);

// const [dishes, setDishes] = useState([]);

// const getDishes= async () => {
//   const { res, error} = await DishService.getRestaurantDishes(route.params.restaurant.id);
//   if (!error) {
//     setDishes(res);
//   } else {
//     setError(res);
//   }
// };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       <Text onPress={()=>navigation.goBack()} style={{paddingTop:100}}>Go back </Text>

      </View>
      <View style={styles.tittle}>
        <Text>
          {route.params.restaurant.name}
        </Text>
      </View>
      <View style={styles.menucontainer}>
          {dishes.map((dish) => (
        <View style={styles.dish}
          key={dish.id}>
            <Text>{dish.name}</Text>
            
        </View>
      ))}
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    width: 200,
    height: 150,
  },
  menucontainer: {
    width: 150,
    height: 250,
  },
  dish: {
    width: 50,
    height: 50,
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