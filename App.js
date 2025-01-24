import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/components/Screens/login';
import SignupScreen from './src/components/Screens/signup';
import InfoScreen from './src/components/Screens/info';
import Mcqs from './src/components/Screens/Mcqs';
import Questions from './src/components/Screens/questions';
import onboarding from './src/components/Screens/onboarding';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={onboarding}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mcqs"
          component={Mcqs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
