import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { useSelector } from 'react-redux';
import Home from './screens/Home';
import { AppStateType } from './stores';

const Stack = createStackNavigator();

const Routes = () => {
  const { theme } = useSelector((state: AppStateType) => state.preferences);

  return (
    <ThemeProvider theme={theme}>
      <Stack.Navigator
        headerMode="none"
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
};

export default Routes;
