import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import DetailScreen from './Screen/DetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerView = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
);

const App = () => (
    <NavigationContainer>
        <DrawerView.Navigator initialRouteName='Home'>
            <DrawerView.Screen name='Home' component={HomeStack} />
        </DrawerView.Navigator>
    </NavigationContainer>
);

export default App;
