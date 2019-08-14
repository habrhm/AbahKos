import React, {Component} from 'react';

import {createMaterialTopTabNavigator, createAppContainer}  from 'react-navigation';

import { Provider } from 'react-native-paper';
import Maps from '../screen/Maps'
import List from '../screen/List'
import DetailList from '../screen/ListDetail'
import Explore from '../screen/Explore';

const AppNavigator = createMaterialTopTabNavigator(
    {
    
    Maps: {
      screen: Maps,
      
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