import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './stores';

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </NavigationContainer>
);

export default App;
