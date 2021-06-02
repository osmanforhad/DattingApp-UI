import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ChatStackNavigator from './src/Navigations/Navigator';



const App = () => {
  return(
    <NavigationContainer>
      <ChatStackNavigator/>
    </NavigationContainer>
  )
}
export default App;