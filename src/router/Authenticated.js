import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from './routes';
import Home from '../screens/Home';


const Stack = createStackNavigator();

const Authenticated = () => {
  console.log('Form Authenticated');
  return (
    <Stack.Navigator initialRouteName={Routes.Home} >
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{headerShown: false}}
      />

    </Stack.Navigator>

  );
};

export default Authenticated;
