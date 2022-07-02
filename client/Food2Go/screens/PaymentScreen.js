import { View, Text } from 'react-native'
import React from 'react'

const PaymentScreen = () => {

  const [card, setCard] = useState();

  return (
    <View>
      <CardForm
        cardStyle={{
          backgroundColor: '#FFFFFF',
        }}
        style={{
          width: '100%',
          height: 300,
        }}
        onFormComplete={(cardDetails) => {
          setCard(cardDetails);
        }}
      />
    </View>
  )
}

export default PaymentScreen