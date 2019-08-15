import React from 'react'
import {Text, View} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {Appbar} from 'react-native-paper'

export default class ExploreHeader extends React.Component {
    render() {
      return (
        <Appbar.Header>
        <Appbar.Action  
            icon='home'
        />
        <Appbar.Content
            title="AbahKos"
        />

    </Appbar.Header>
      );
    }
  }