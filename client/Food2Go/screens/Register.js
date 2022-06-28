//no auth required 
import { View, Text } from 'react-native'
import React from 'react'
import auth from '../utils/auth';
import apiServiceJWT from './../ApiServiceJWT';

const initialState = {
  email: '',
  password: '',
  nickname: '',
};

const Register = (props) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register