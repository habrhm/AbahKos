import React, {Component} from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './src/routes/ExploreRoute'
import Wishlist from './src/screen/Wishlist'
import Chat from './src/screen/Chat'
import Login from './src/screen/Login'

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions :{
        tabBarIcon: ({tintColor}) =><Icon name="md-search" size={20} color={tintColor}/>,

        
      }
    },
    Wishlist: {
      screen: Wishlist,
      navigationOptions :{
        tabBarIcon: ({tintColor}) =><Icon name="md-heart-empty" size={20} color={tintColor}/>,

        
      }
      
    },
    Login: {
      screen: Login,
      navigationOptions :{
        tabBarIcon: ({tintColor}) =><Icon name="md-person" size={20} color={tintColor}/>,

        
      }
    }
  },{
    shifting: true,
    initialRouteName: 'Explore',
    activeColor: 'green',
    inactiveColor: 'black',
    barStyle: { backgroundColor: 'white' }
  }
)

export default createAppContainer(AppNavigator)
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react'
// import { Provider as PaperProvider, BottomNavigation, DefaultTheme } from 'react-native-paper';

// import Explore from './src/screen/Explore'
// import Wishlist from './src/screen/Wishlist'
// import Chat from './src/screen/Chat'
// import Login from './src/screen/Login'




//   class  App extends Component{
    
//     state = {
//         index: 0,
//         routes: [
//           { key: 'explore', title: 'Explore', icon: 'search', color: 'white' },
//           { key: 'wishlist', title: 'Wishlist', icon: 'favorite-border',  color: 'white' },
//           { key: 'chat', title: 'Chat', icon: 'chat', color: 'white' },
//           { key: 'login', title: 'Login', icon: 'person', color: 'white' },
//         ],
//       }
    
      
    
//     _handleIndexChange = index => this.setState({ index });

//     _renderScene = BottomNavigation.SceneMap({
//     explore: Explore,
//     wishlist: Wishlist,
//     chat: Chat,
//     login:Login,
//   });
  

//     render(){

//       return(
        
        
//       <PaperProvider theme={theme}>
//         <BottomNavigation
//         navigationState={this.state}
//         onIndexChange={this._handleIndexChange}
//         renderScene={this._renderScene}
//         activeColor='green'
//         inactiveColor='black'
//          />
//       </PaperProvider>
      
//       )
//     }
//   }

//   const theme = {
//     ...DefaultTheme,
//     roundness: 2,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: 'white',
//       accent: '#f1c40f',
//     }
//   };
//   export default App