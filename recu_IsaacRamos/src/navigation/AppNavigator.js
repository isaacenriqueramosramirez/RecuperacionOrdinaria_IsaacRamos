import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import ShowsScreen from '../screens/ShowsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Student">
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ title: 'Información del estudiante' }}
        />
        <Stack.Screen
          name="Shows"
          component={ShowsScreen}
          options={{ title: 'Shows de TVMaze' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
