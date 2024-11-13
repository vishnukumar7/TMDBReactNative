import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from './page/Dashboard';
import {  DefaultTheme, NavigationContainer } from '@react-navigation/native';
import MovieDetail from './page/MovieDetail';


const Stack = createNativeStackNavigator();
const  App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background:'black',
    },
  };

  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
          <Stack.Screen name="MovieDetail" component={MovieDetail} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );

};

export default App;
