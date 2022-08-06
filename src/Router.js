import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; // en önemli kütüphane.
import MemberSign from './Pages/MemberSign';
import MemberResult from './Pages/MemberResult';
import Welcome from './Pages/Welcome';

const Stack = createNativeStackNavigator();   // Kütüphanein bütün gerekliliklerini bir sabit değişkene atıyoruz.

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="WelcomeScreen" component={Welcome}/>
        <Stack.Screen name="MemberSignScreen" component={MemberSign} /> 
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;