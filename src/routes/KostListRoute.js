import React, {Component} from 'react';

import {createStackNavigator, createAppContainer}  from 'react-navigation';

import { Provider } from 'react-native-paper';
import Explore from '../screen/Explore'
import DetailRoute from './DetailRoutes'
import List from '../screen/List';
import ListDetail from '../screen/ListDetail';

const AppNavigator = createStackNavigator(
    {
    
    KostList: {
      screen: List,
      
    },
    KostListDetail: {
        screen: ListDetail
      }

    
  },
  {
      initialRouteName : 'KostList'
  }
  
  );

  const Container = createAppContainer(AppNavigator);

  export default class KostListRoute extends Component {
    render() {
      return(
       
            <Container />
       
      ) 
      
      
    }
  }