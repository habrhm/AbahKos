import React, {Component} from 'react';
import {createStackNavigator, createAppContainer}  from 'react-navigation';
import { Provider } from 'react-native-paper';

import MenuRoute from './src/routes/GuestMainMenuRoute'
import List from './src/screen/List';
import ListDetail from './src/screen/ListDetail'
import LoginForm from './src/screen/LoginForm'
import RegisterForm from './src/screen/RegisterForm'
import PasangIklan from './src/screen/PasangIklan'
import BookingKost from './src/screen/BookingKost'
import Login from './src/screen/Login'
import NavigationServices from './src/navigation-services/NavigationServices'

const AppNavigator = createStackNavigator(
    {
    
    Menu: {
      screen: MenuRoute,
      navigationOptions:{
      header : null
      }
    },
    KostList: {
        screen: List,
        navigationOptions:{
          header : null
          }
      },
    KostDetail: {
        screen: ListDetail,
        navigationOptions:{
          header : null
          }
    },
    LoginForm: {
        screen: LoginForm,
        navigationOptions:{
            header : null
            }
    },
    PasangIklan: {
        screen: PasangIklan,
        navigationOptions:{
          header : null
          }
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
    Login: {
      screen: Login,
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