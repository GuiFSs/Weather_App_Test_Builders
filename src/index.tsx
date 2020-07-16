import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { Provider, useSelector } from 'react-redux';
import Routes from './routes';
import store, { AppStateType } from './stores';

const App = () => {
  const { theme } = useSelector((state: AppStateType) => state.preferences);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
