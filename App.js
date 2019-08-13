import React, {Component} from 'react';

import {createMaterialTopTabNavigator, createAppContainer}  from 'react-navigation';

import { Provider } from 'react-native-paper';
import Maps from './src/screen/Maps'
import List from './src/screen/List'
import DetailList from './src/screen/DetailList'
import Explore from './src/screen/Explore';

const AppNavigator = createMaterialTopTabNavigator(
    {
    
    Maps: {
      screen: DetailList,
      
    },
    List: {
        screen: List
      }

    
  },
  {
      initialRouteName : 'Maps'
  }
  
  );

  const Container = createAppContainer(AppNavigator);

  export default class App extends Component {
    render() {
      return(
        <Provider>
            <Container />
        </Provider>
      ) 
      
      
    }
  }