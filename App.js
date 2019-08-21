import React from 'react'
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import {
  createMaterialBottomTabNavigator
} from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './src/screen/Explore';
import Wishlist from './src/screen/Wishlist';
import Profil from './src/screen/Profil';
import List from './src/screen/List';
import ListDetail from './src/screen/ListDetail';
import LoginForm from './src/screen/LoginForm';
import RegisterForm from './src/screen/RegisterForm';
import Login from './src/screen/Login';
import PasangIklan from './src/screen/PasangIklan';
import BookingKost from './src/screen/BookingKost';


const Nav = createSwitchNavigator({
    Guest: {
      screen: createStackNavigator({
        Menu: {
          screen: createMaterialBottomTabNavigator({
            Explore: {
              screen: Explore,
              navigationOptions: {
                tabBarIcon: ({
                  tintColor
                }) => < Icon name = "md-search"
                size = {
                  20
                }
                color = {
                  tintColor
                }
                />,


              }
            },
            Wishlist: {
              screen: Wishlist,
              navigationOptions: {
                tabBarIcon: ({
                  tintColor
                }) => < Icon name = "md-heart"
                size = {
                  20
                }
                color = {
                  tintColor
                }
                />,


              }

            },
            Login: {
              screen: Login,
              navigationOptions: {
                tabBarIcon: ({
                  tintColor
                }) => < Icon name = "md-person"
                size = {
                  20
                }
                color = {
                  tintColor
                }
                />,


              }
            }
          }, {

            shifting: false,
            initialRouteName: 'Explore',
            activeColor: '#43A047',
            inactiveColor: 'black',
            barStyle: {
              backgroundColor: 'white'
            }
          })
        },
        List: {
          screen: List
        },
        ListDetail: {
          screen: ListDetail
        },
        LoginForm: {
          screen: LoginForm
        },
        RegisterForm: {
          screen: RegisterForm
        },

      }, {
        defaultNavigationOptions: {
          header: null
        }
      })
    },
    Auth: {
      screen: createStackNavigator({
        Menu: {
          screen: createMaterialBottomTabNavigator({
            Explore: {
              screen: Explore,
              navigationOptions: {
                tabBarIcon: ({
                  tintColor
                }) => < Icon name = "md-search"
                size = {
                  20
                }
                color = {
                  tintColor
                }
                />,


              }
            },
            Wishlist: {
              screen: Wishlist,
              navigationOptions: {
                tabBarIcon: ({
                  tintColor
                }) => < Icon name = "md-heart"
                size = {
                  20
                }
                color = {
                  tintColor
                }
                />,


              }

            },
            Profil: {
              screen: Profil,
              navigationOptions: {
                tabBarIcon: ({
                  tintColor
                }) => < Icon name = "md-person"
                size = {
                  20
                }
                color = {
                  tintColor
                }
                />,


              }
            }
          }, {
            shifting: false,
            initialRouteName: 'Explore',
            activeColor: '#43A047',
            inactiveColor: 'black',
            barStyle: {
              backgroundColor: 'white'
            }
          })
        },
        List: {
          screen: List
        },
        ListDetail: {
          screen: ListDetail
        },
        PasangIklan: {
          screen: PasangIklan
        },
        BookingKost: {
          screen: BookingKost
        },

      }, {
        defaultNavigationOptions: {
          header: null
        }
      })
    },




  }, {
    navigationOptions: {
      header: null
    }
  }

)
const Container = createAppContainer(Nav)
export default class App extends React.Component {
  render() {
    return ( <
      Container

      /
      >
    )
  }
}