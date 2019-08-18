import React from 'react'
import {Text, View} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {Appbar} from 'react-native-paper'

export default class ExploreHeader extends React.Component {
    render() {
      return (
        <Appbar.Header style={{backgroundColor : '#fff'}}>
        <Appbar.Action  
            icon='home'
            color='#43A047'
            
        />
        <Appbar.Content
            title="AbahKos"
            color='#43A047'
        />

    </Appbar.Header>
      );
    }
  }