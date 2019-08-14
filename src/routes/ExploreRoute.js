import React, {Component} from 'react';

import {createStackNavigator, createAppContainer}  from 'react-navigation';

import { Provider } from 'react-native-paper';
import Explore from '../screen/Explore'
import DetailRoute from './DetailRoutes'
import KostListRoute from './KostListRoute';

const AppNavigator = createStackNavigator(
    {
    
    Maps: {
      screen: Explore,
      
    },
    KostList: {
        screen: KostListRoute
      }

    
  },
  {
      initialRouteName : 'Maps'
  }
  
  );

  const Container = createAppContainer(AppNavigator);

  export default class ExploreRoute extends Component {
    render() {
      return(
       
            <Container />
       
      ) 
      
      
    }
  }