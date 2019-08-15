import React, {Component} from 'react';
import {createStackNavigator, createAppContainer}  from 'react-navigation';
import { Provider } from 'react-native-paper';

import MenuRoute from './src/routes/MainMenuRoute'
import List from './src/screen/List';
import ListDetail from './src/screen/ListDetail'
import LoginForm from './src/screen/LoginForm'
import RegisterForm from './src/screen/RegisterForm'
import PasangIklan from './src/screen/PasangIklan'
import BookingKost from './src/screen/BookingKost'

import NavigationServices from './NavigationServices'

const AppNavigator = createStackNavigator(
    {
    
    Menu: {
      screen: MenuRoute,
      navigationOptions:{
      header : null
      }
    },
    KostList: {
        screen: List
      },
    KostDetail: {
        screen: ListDetail
    },
    LoginForm: {
        screen: LoginForm,
        navigationOptions:{
            header : null
            }
    },
    PasangIklan: {
        screen: PasangIklan
    },
    BookingKost: {
        screen:   BookingKost
    
    },

    RegisterForm: {
      screen: RegisterForm,
      navigationOptions:{
          header : null
          }
    },
    
    

    
  },
  {
      initialRouteName : 'Menu'
  }
  
  );

  const Container = createAppContainer(AppNavigator);

  export default class ExploreRoute extends Component {
    render() {
      return(
       
            <Container 
                ref={navigatorRef => {
                    NavigationServices.setTopLevelNavigator(navigatorRef);
                }}
            />
       
      ) 
      
      
    }
  }