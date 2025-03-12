import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import HomeScreen from '../actions/home';
import DashThree from '../components/generate/aiEdit';

const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Detail" component={DashThree} options={{ headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});
