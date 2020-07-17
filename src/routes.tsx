import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeProvider } from 'styled-components/native';
import { useSelector } from 'react-redux';
import { AppStateType } from './stores';
import DrawerContent from '~/core/components/DrawerContent';
import Home from './screens/Home';
import SplashScreen from './screens/SplashScreen';

const Drawer = createDrawerNavigator();

const Routes = () => {
  const { theme } = useSelector((state: AppStateType) => state.preferences);

  return (
    <ThemeProvider theme={theme}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="SplashScreen"
      >
        <Drawer.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
        />
      </Drawer.Navigator>
    </ThemeProvider>
  );
};

export default Routes;
